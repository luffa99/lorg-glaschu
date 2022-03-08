/* Enters or exit fullscreen */
function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
    keepAwake();

    // autoResizeDiv();
}

function enterFullScreen(hideNotification) {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    keepAwake();
    
    if(hideNotification){
        $("#info").modal("hide");
    }
}


/* Wake lock: keep screen wake */
function keepAwake() {
    // Create a reference for the Wake Lock.
    let wakeLock = null;
    // create an async function to request a wake lock
    try {
        wakeLock = navigator.wakeLock.request('screen');
        // alert('Wake Lock is active!');
    } catch (err) {
        // The Wake Lock request has failed - usually system related, such as battery.
        
    }
}
keepAwake();
// window.oncontextmenu = function(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     return false;
// };
function notification(title,msg) {
    $('#infoTitle').text(title);
    $('#infoBody').html(msg);
    $('#info').modal('show');
}

function openQuestion(title, msg) {
    $('#questionTitle').text(title);
    $('#questionBody').html(msg);
    // $('#qwin').modal({
    //     keyboard: false,
    //     backdrop: false,
    //     focus: true
    // })

    $('#qwin').modal('show');
}

function autoresize(id){
    $("#"+id).show();
    $("#"+id).height(window.innerHeight - $("#"+id).position().top - 1 +'px'); 
    // $("#"+id).hide();
}

function addTextToImage_512(imagePath, path, date, name, points) {
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = "#000000";
        context.lineStyle = "#ffff00";
        context.font = "30px Verdana";
        context.textAlign = "center";
        context.fillText(path, 256, 50);
        
        context.font = "20px Verdana";
        context.fillText(date, 256, 90);
        
        context.font = "italic 30px Verdana";
        context.fillText(name, 256, 500);
        
        context.font = "bold 40px Verdana";
        context.fillText(points, 256, 550);
    };
}
//addTextToImage("https://dev1.rail-suisse.ch/treasure/media/winner512_600.png", "Nome del percorso", "12.11.2022","Lucas Falardi", "24'000");
function addTextToImage_300(imagePath, path,date, name, points) {
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = "#000000";
        context.lineStyle = "#ffff00";
        context.font = "bold 25px Verdana";
        context.textAlign = "center";
        context.fillText(path, 150, 33);
        
        context.font = "18px Verdana";
        context.fillText(date, 150, 60);
        
        context.font = "italic 20px Verdana";
        context.fillText(name, 150, 290);
        
        context.font = "bold 39px Verdana";
        context.fillText(points, 150, 330);
    };
}

function save() {
    var canvas = document.getElementById("canvas");
    window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
}

async function share() {
    const canvasElement = document.getElementById('canvas');
    const dataUrl = canvasElement.toDataURL();
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [
      new File(
        [blob],
        'lorg_glashu.png',
        {
          type: blob.type,
          lastModified: new Date().getTime()
        }
      )
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
}

function newgame() {
    const d = new Date();
    d.setTime(d.getTime());
    let expires = "expires=" + d.toUTCString();
    document.cookie = "game_state" + "=" + "null" + ";" + expires + ";path=/";
      
    window.location.href = "";
}