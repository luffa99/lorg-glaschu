<?php
    // We need to use sessions, so you should always start sessions using the below code.
    session_start();
    // If the user is not logged in redirect to the login page...
    // if (!isset($_SESSION['loggedin'])) {
    //     header('Location: login.php');
    //     exit;
    // }
?>
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

  <title>Lorg Glaschu</title>
  <meta name="theme-color" content="#040720">
  <meta name="apple-mobile-web-app-status-bar-style" content="#040720">


  <!-- <meta name="description" content="A simple HTML5 Template for new projects.">
  <meta name="author" content="SitePoint">

  <meta property="og:title" content="A Basic HTML5 Template">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/">
  <meta property="og:description" content="A simple HTML5 Template for new projects.">
  <meta property="og:image" content="image.png">

  <link rel="icon" href="/favicon.ico">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png"> -->
  <link rel="icon" href="media/icon.png">
  <link rel="apple-touch-icon" href="media/icon.png"> 

  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="index.css">
  <!-- LeafLet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>

    <style>
        #mapid { height: 400px;}
        body {overflow: hidden;}
        .dark {
            background-color: #040720;
        }
        .white {
            color: #ffffff;
        }
        .hide {
            display: none;
        }
        .topcaption {
            top: 0;
            bottom: auto;
        }
        .carousel-item {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }
    </style>


</head>

<body>


<div class="cover-container d-flex w-100 h-100 mx-auto flex-column pb-0 mb-0">

    
    <div id="top" class="mb-2">

      <!-- HEADER -->  
      <header class="m-2 p-1 border-bottom d-flex justify-content-between">
          <div>
            <span class="arrow arrow-left" onclick="window.history.back()"></span>
            <img src='media/maximize.png' style="height:25px;width:25px;vertical-align: sub;margin-left:10px" onclick='toggleFullScreen()'/>
          </div>
          <div class="m-2  fixed-top text-center" style="pointer-events: none;font-size:1.3rem" id="pathName">Treasure Hunt</div>
          <div style="font-size: 0.8rem;line-height:0px;text-align: right;margin-top: -3px">
            <span>
                <img src="media/wifi-signal.png" style="height:23px;width:23px;padding:2px;">
                <span id="gps">Good</span><br>GPS
            </span>
          </div>
      </header>

      <main role="main" class="inner">
        
        <div class="hide" id="mapid"></div>
        <div class="p-2 hide" id="list" style="overflow-y:auto; height:200px">
            <h2 id="inst">Instruction</h2>
            <p id="hint">Hint</p>
            <!-- <button type="button" id="dd" class="btn btn-primary" onclick="paths[actualState.pathId].endgame();">
                finish
            </button> -->
            <!-- Button for open question -->
            <button type="button" id="questionButton" class="btn btn-primary hide m-2" data-toggle="modal" data-target="#qwin" data-keyboard="false" data-backdrop="static">
                Fosgail a’ cheist
            </button>
            <button type="button" id="extraInfo" class="btn btn-light hide m-2" data-toggle="modal" data-target="#info" data-keyboard="false" data-backdrop="static">
                Extra info
            </button>
            <button type="button" id="moveToNextAnsBtn" onclick="paths[actualState.pathId].moveToNextAns();" class="btn btn-warning hide m-2">
                Dhan ath cheist
            </button>
        </div>
        <div class="p-2 hide overflow-auto" id="finalmsg" style="height:200px">
            <h2 id="end_title" class="p-1"></h2>
            <canvas id="canvas" width="299" height="350" class="m-3"></canvas>
            <p id="end_text" class="p-1"></p>
            <button id="savebtn" onclick='save()' class="btn btn-primary m-2 hide">Sàbhail</button>
            <button id="sharebtn" onclick='share()' class="btn btn-success m-2 hide">Sgaoil (air na meadhanan sòisealta)</button><br />
            <button id="newbtn" onclick='newgame()' class="btn btn-warning m-2 mb-4 hide">Tòisich geama ùr</button>
        </div>
        <div id="picturescarcont" class="hide"></div>
        <!-- Modal for questions -->
        <div class="modal fade" id="qwin" tabindex="-1" role="dialog" aria-labelledby="qwin" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content dark">
                    <div class="modal-header">
                        <h5 class="modal-title" id="questionTitle">no question</h5>
                        <button type="button" class="close white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="questionBody">
                        no body
                    </div>
                    <div class="modal-body hide" id="discoverMore">
                        <!-- <h2>Discover more!</h2> -->
                        <p id="discoverMoreText"></p>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal for notifications -->
        <div class="modal fade" id="info" tabindex="-1" role="dialog" aria-labelledby="info" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="infoTitle">No title</h5>
                    <button type="button" class="close white" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body" id="infoBody">
                        no body
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
</div>

<div id="mapcontainer" class="fixed-bottom">
    
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- your content here... -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    <!-- LeafLet JS -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin=""></script>

    <script src="js/classes.js"></script>
    <script src="js/distance.js"></script>
    <script src="js/gamedata.js"></script>
    <script src="js/gamelogic.js"></script>
    <script src="js/geolocation.js"></script>
    <script src="js/map.js"></script>
    <script src="js/screen.js"></script>

    <script>
        let url_path = new URLSearchParams(window.location.search).get('path');
        startPath(url_path);
    </script>
</body>
</html>