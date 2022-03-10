<?php
if (isset($_GET["p"])) {
    $page = (int) $_GET["p"];
    if ($page > 5 || $page < 0) $page = 0;
} else {
    $page = 0;
}

$page_mapping = array("index_failte.inc.php","index_cluich.inc.php","index_goireasan.inc.php","index_fios.inc.php","index_mu.inc.php","index_laghail.inc.php");
?>
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

  <title>Lorg Glaschu</title>
  <meta name="theme-color" content="#040720">
  <meta name="apple-mobile-web-app-status-bar-style" content="#040720">
  <link rel="manifest" href="manifest.json?v=0.01">


  <!-- <meta name="description" content="A simple HTML5 Template for new projects.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="A Basic HTML5 Template">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
  <meta property="og:description" content="A simple HTML5 Template for new projects.">
  <meta property="og:image" content="image.png">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
  <link rel="icon" href="media/icon.png">
  <link rel="apple-touch-icon" href="media/icon.png"> 

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="index.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

   <style>
       .card {
           min-height: 200px;
       }
	</style>


</head>

<body>

<div class="cover-container d-flex w-100 h-100 mx-auto flex-column pb-0 mb-0">
    <div id="top" class="mb-2">
      <header class="m-2 text-center">
          <!-- <h3 class="p-2">slighean ionmhais àrc-eòlach</h3> -->
          <img src="media/cover.webp" class="img-fluid p-2">
          <!-- <button class="btn-primary hide" id="install">INSTALL</button> -->
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link <?php if ($page==0) echo "active"; ?>" href="?p=0">Fàilte</a>
            <a class="nav-link <?php if ($page==1) echo "active"; ?>" href="?p=1">Cluich!</a>
            <a class="nav-link <?php if ($page==2) echo "active"; ?>" href="?p=2">Goireasan</a>
            <a class="nav-link <?php if ($page==3) echo "active"; ?>" href="?p=3">Fios thugainn</a>
            <a class="nav-link <?php if ($page==4) echo "active"; ?>" href="?p=4">Mu Lorg - Glaschu</a>
          </nav>
      </header>

      <main role="main" class="inner mt-2 p-3" id="main">
       <?php
            require $page_mapping[$page];
       ?>
      </main>
    </div>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- your content here... -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js"></script>
    <script>
        // window.oncontextmenu = function(event) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     return false;
        // };


        /* Service worker */
        swURL = "service-worker.js?v=1.3";
        // Register the service worker ---> DISABLED TODO
        if ('serviceWorker' in navigator && false) {
        // Wait for the 'load' event to not block other work
        window.addEventListener('load', async () => {
            // Try to register the service worker.
            var registration;
            try {
                registration = await navigator.serviceWorker.register(swURL).then({
                function(registration) {
                    serviceWorkerRegistration.update();
                }
            });
                console.log('Service worker registered! 😎', registration);
            } catch (err) {
                console.log('😥 Service worker registration failed: ', err);
            }

            // detect Service Worker update available and wait for it to become installed
            registration.addEventListener('updatefound', () => {
                if (registration.installing) {
                    // wait until the new Service worker is actually installed (ready to take over)
                    registration.installing.addEventListener('statechange', () => {
                        if (registration.waiting) {
                            // if there's an existing controller (previous Service Worker), show the prompt
                            if (navigator.serviceWorker.controller) {
                                self.skipWaiting();
                            } else {
                                // otherwise it's the first install, nothing to do
                                console.log('Service Worker initialized for the first time')
                            }
                        }
                    })
                }
            })

            let refreshing = false;

            // detect controller change and refresh the page
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (!refreshing) {
                    window.location.reload()
                    refreshing = true
                }
            })

            });
        } 
    </script><script>

        // isInWebAppiOS = (window.navigator.standalone === true);
        // isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);

        // function isPWA() {
        //     const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        //     if (document.referrer.startsWith('android-app://')) {
        //         return true;
        //     } else if (navigator.standalone || isStandalone) {
        //         return true;
        //     }
        //     return false;
        // }

        // if(isPWA()) {
        //     $('#install').css("background-color", "yellow");
        // } else {
        //     $('#install').css("background-color", "red");
        // }

        // butInstall = document.getElementById("install");
        // window.addEventListener('beforeinstallprompt', (event) => {
        //     // Prevent the mini-infobar from appearing on mobile.
        //     event.preventDefault();
        //     console.log('👍', 'beforeinstallprompt', event);
        //     // Stash the event so it can be triggered later.
        //     window.deferredPrompt = event;
        //     // Remove the 'hidden' class from the install button container.
        //     butInstall.classList.toggle('hide', false);
        //     return false;
        // });
        // butInstall.addEventListener('click', async () => {
        //     console.log('👍', 'butInstall-clicked');
        //     const promptEvent = window.deferredPrompt;
        //     if (!promptEvent) {
        //         alert("The deferred prompt isn't available.");
        //         return;
        //     }
        //     // Show the install prompt.
        //     promptEvent.prompt();
        //     // Log the result
        //     const result = await promptEvent.userChoice;
        //     console.log('👍', 'userChoice', result);
        //     // Reset the deferred prompt variable, since
        //     // prompt() can only be called once.
        //     window.deferredPrompt = null;
        //     // Hide the install button.
        //     butInstall.classList.toggle('hide', true);
        // });
        // window.addEventListener('appinstalled', (event) => {
        //     console.log('👍', 'appinstalled', event);
        //     // Clear the deferredPrompt so it can be garbage collected
        //     window.deferredPrompt = null;
        // });
    </script>
</body>
</html>