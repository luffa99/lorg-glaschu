/* State of the game */
class State { 
    constructor (pathId, start_time, end_time, watchLocationId) {
        this.pathId = pathId;
        this.start_time = start_time;
        this.end_time = end_time;
        this.score = 0;
        this.watchLocationId = watchLocationId;
    }

    savestate() {
        const d = new Date();
        d.setTime(d.getTime() + (10*365*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = "game_state" + "=" + JSON.stringify(this) + ";" + expires + ";path=/";
    }

    // Compare cookie state with the one in the URL
    issaved() {
        let url_path = new URLSearchParams(window.location.search).get('path');
        let name = "game_state" + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          
          if (c.indexOf(name) == 0) {
            let data = c.substring(name.length, c.length);
            let s = "";
            if (data != "") {s = JSON.parse(data)};
            if(url_path == s.pathId) {
                return true;
            }
          }
        }
        return false;
    }
}

/* State of classic game (questions reveals hint to next point) */
class StateClassic extends State {
    constructor (pathId, question, start_time, end_time, watchLocationId, target_lat, target_lon, distanceNotification, questionNotification) {
        super(pathId, start_time, end_time, watchLocationId);
        this.question = question;
        this.target_lat = target_lat;
        this.target_lon = target_lon;
        this.distanceNotification = distanceNotification; /* Enables distance notification, i.e., notificaion wheter we are next to the target coords*/
        this.questionNotification = questionNotification;
    }
   
    restorestate(){
        let name = "game_state" + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        let data = "";
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            data = c.substring(name.length, c.length);
          }
        }
        if (data!=""){
            $('#list').show();
            let s = JSON.parse(data);
            this.pathId = s.pathId;
            this.question = s.question;
            this.start_time = s.start_time;
            this.end_time = s.end_time;
            this.target_lat = s.target_lat;
            this.target_lon = s.target_lon;
            this.distanceNotification = s.distanceNotification; 
            this.questionNotification = s.questionNotification;
            this.score = s.score;
            if(s.question > 0 && actualState.end_time == 0) {
                $("#pathName").text(paths[actualState.pathId].short);
                $('#inst').html("Stiùireadh");
                $('#hint').html(paths[actualState.pathId].questions[actualState.question-1].hint_nextstep);
                actualState.target_lat = paths[actualState.pathId].questions[actualState.question].lat;
                actualState.target_lon = paths[actualState.pathId].questions[actualState.question].lon;
                actualState.distanceNotification = true;
                actualState.questionNotification = true;
            } else if (actualState.end_time == 0) {
                actualState.distanceNotification = true;
                actualState.questionNotification = true;
                paths[actualState.pathId].start();
            } else {
                navigator.geolocation.clearWatch(actualState.watchLocationId);
                $('#mapid').hide();
                $('#list').hide();

                // var tot_points = actualState.score;
                // $('#end_title').text("You won!");
                // $('#end_text').text("Congratulations for completing the game!");
                // var today = new Date();
                // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();        
                // addTextToImage_300("https://dev1.rail-suisse.ch/treasure/media/winner_299.png", paths[actualState.pathId].short, date,"No name", tot_points);
                // if (navigator.canShare) { $('#sharebtn').removeClass('hide');}
                // autoresize("finalmsg");
                // $('#finalmsg').fadeIn(500);
                paths[this.pathId].endgameui();
            }
        }
    }
}

class StateScavenger extends State {
    constructor (pathId, start_time, end_time, watchLocationId) {
        super(pathId, start_time, end_time, watchLocationId);
        this.found = new Array();
    }
    restorestate(){
        console.log("Restoring state");
        $("#pathName").text(paths[actualState.pathId].short);
        // paths[actualState.pathId].start();
        let name = "game_state" + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        let data = "";
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            data = c.substring(name.length, c.length);
          }
        }
        if (data!=""){
            let s = JSON.parse(data);
            this.pathId = s.pathId;
            this.start_time = s.start_time;
            this.end_time = s.end_time;
            this.score = s.score;
            this.found = s.found;
            console.log(s.found);
            this.found.forEach((el,_) => {
                $("#pic-unlock-"+el).text("Barrachd fiosrachaidh");
                $("#pic-unlock-"+el).show();
                $("#pic-hintb1-"+el).off();
                $("#pic-hintb1-"+el).hide();
                $("#pic-dist-"+el).hide();
                $("#pic-hint1-"+el).show();
                $("#pic-found-"+el).show();
            });
            if(s.end_time != 0) {
                paths[actualState.pathId].endgame();
                return;
            }
            paths[actualState.pathId].checkend();
        }
    }
}

/* Class of a question */
class Question {
    constructor (where, lat, lon, background){
        this.where = where;
        this.lat = lat;
        this.lon = lon;
        this.background = background;
    }
}

/* This is the classic question with multiple possible answers */
class MultipleChoice extends Question {
    constructor(where, lat, lon, background, question, hint, answers, correctans, isfinal, extrainfo){
        super(where, lat, lon, background);
        this.question = question;
        this.answers = answers;
        this.correctans = correctans;
        this.hint_nextstep = hint;
        this.final = isfinal;
        this.extrainfo = extrainfo;
    } 
}

/* In this questions users see a picture and have to go to the location */
class Picture extends Question {
    constructor(where, lat, lon, info, hint1, hint2, hint3, src){
        super(where, lat, lon, info);
        this.src = src;
        this.hint1 = hint1;
        this.hint2 = hint2;
        this.hint3 = hint3;
    } 
}
/* Class representing a path */
class Path {
    constructor(name,short,id,startplace,start_lat,start_lon,intro) {
        this.name = name;
        this.short = short;
        this.id = id;
        this.startplace = startplace;
        this.start_lat = start_lat;
        this.start_lon = start_lon;
        this.intro = intro; 
    }

    /* This function initializes the game */
    initgame() {
        return null;
    }

    endgameui(){
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        
        autoresize("finalmsg");
        window.onresize = autoresize("finalmsg");
        document.addEventListener('fullscreenchange', (event) => {
            autoresize("finalmsg");
        });
        $('#qwin').on('hide.bs.modal', function (e) {
            $('#end_title').text("Sin thu!");
            $('#end_text').text("Math fhèin!");
            var name = $('#player_name').val();
            addTextToImage_300("https://lorg-glaschu.com/media/winner_299.png", paths[actualState.pathId].short, date, name, actualState.score);
            if (navigator.canShare) { $('#sharebtn').removeClass('hide');}
            $('#savebtn').removeClass('hide');
            $('#newbtn').removeClass('hide');
            // autoresize("finalmsg");
        })
        openQuestion("Aon rud eile…",'<div class="form-group">\
                                        <label>Ainm a’ chluicheadair? Ainm-cleachdaidh?</label>\
                                        <input type="text" id="player_name" maxlength="16" class="d-block mb-3" required>\
                                        <input type="hidden" id="evaluation">\
                                        <label class="d-block">Ciamar a\' chòrd an geama riut?</label>\
                                        <span style="font-size:30px" id="ev0" class="p-2" onclick="evaluateGame(this);">😍</span>\
                                        <span style="font-size:30px" id="ev1" class="p-2" onclick="evaluateGame(this);">😀</span>\
                                        <span style="font-size:30px" id="ev2" class="p-2" onclick="evaluateGame(this);">😕</span>\
                                        </div> <button id="nameBtn" type="submit" class="btn btn-primary mt-3" onclick="saveStats()" disabled>Sàbhail</button>');        
    }

    notifyFullScreen() {
        setTimeout(function() {
            // If user has not yet changed to full screen, show notification
            var doc = window.document;
            if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                notification("Go to full screen!",'For better performance, we advice you to switch to fullscreen. You can always exit clicking on the icon on the top left.\
                <a href="#" onclick="enterFullScreen(true);"  class="btn btn-lg btn-success m-2 d-block">ENTER FULL SCREEN</a>');
            }
        }, 5000);
    }
}

class PathClassic extends Path {
    constructor(name,short,id,startplace,start_lat,start_lon,intro,questions) {
        super(name,short,id,startplace,start_lat,start_lon,intro);
        this.questions = questions;
    }

    /* Initialize the map */
    setmap() {

        this.mymap = L.map('mapid', {attributionControl: false}).setView([0,0], 17);

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
        }).addTo(this.mymap);

        this.marker = L.marker([0,0], {icon: greenIcon}).addTo(this.mymap);
    }

    /* Fix map height */
    autoResizeDiv() {
        document.body.style.height = window.innerHeight +'px';
        document.getElementById("mapid").style.height = (window.innerHeight / 2) +'px';
        document.getElementById("list").style.height = window.innerHeight - $("#list").position().top - 1 +'px'; 
    }

    gpsGameLogic(lat,lon) {
        if (actualState.target_lat == null){
            return;
        }
        var gpsNotificationThreeshold = 100; /* in meters */
        var gpsQuestionThreeshold = 10; /* in meters */
        var distanceFromTarget = distance(lat,lon,actualState.target_lat,actualState.target_lon,"K")*1000; /* in meters */
        console.log("Distance from target: "+distanceFromTarget );
        if (actualState.distanceNotification && distanceFromTarget < gpsNotificationThreeshold) {
            this.targetMarker = L.marker([actualState.target_lat, actualState.target_lon], {icon: target}).addTo(this.mymap);
            notification("Glè mhath","Tha thu faisg air an àite ceart a-nis…thig nas fhaisge gus a' cheist fhosgladh");
            actualState.distanceNotification = false;
            actualState.savestate();
        }
        /* Prepare the question */
        if (actualState.questionNotification && distanceFromTarget < gpsQuestionThreeshold) {
            $('#questionButton').show();
            $('#questionTitle').html(paths[actualState.pathId].questions[actualState.question].where);
            var q = paths[actualState.pathId].questions[actualState.question];
            var qhtml = "";
            if(q instanceof MultipleChoice) {
                qhtml += "<p>"+q.question+"</p>";
                if (q.answers.length >= 1){
                    qhtml += "<div class='list-group' id='ans_list'>";
                    q.answers.forEach ((el,idx) => { 
                        let check = (idx==q.correctans) ? true : false;
                        let correct_id = (idx==q.correctans) ? "id='current_correctans'" : "";
                        qhtml +=  "<a "+correct_id+" href='#' class='list-group-item list-group-item-action' onclick='paths[actualState.pathId].checkAns(this,"+check+");'>"+el+"</a>";
                    });
                    qhtml += "</div>";
                } else {
                    console.log("Multiple choice question doesnt have multiple choices");
                    alert("Fatal error occured. Refresh the page.");
                    return;
                }
            } else {
                console.log("Only multiplehoice questions yet supported");
                alert("Fatal error occured. Refresh the page.");
                return;
            }
            $('#questionBody').html(qhtml);
            $('#discoverMoreText').html(q.background);
            actualState.questionNotification = false;
            actualState.savestate();
            popov();
        }
    }

    checkAns(obj, correct) {
        if(!correct){
            $(obj).addClass("list-group-item-danger");
            $(obj).attr('onclick', '');
            actualState.score -= 10;
            actualState.savestate();
        } else {
            $(obj).addClass("list-group-item-success");
            $(obj).attr('onclick', '');
            actualState.score += 10;

            if(paths[actualState.pathId].questions[actualState.question].final) {
                $('#moveToNextAnsBtn').text("Cuir chrioch air a' gheama");
            }

            $('#ans_list').children().fadeOut(500);
            $('#current_correctans').fadeIn(500);
            $('#discoverMore').fadeIn(500);
            $('#moveToNextAnsBtn').show();
            $('#inst').hide();
            $('#hint').hide();
            if (paths[actualState.pathId].questions[actualState.question].extrainfo != 0){
                $('#infoTitle').text("Barrachd fiosrachaidh");
                $('#infoBody').html(paths[actualState.pathId].questions[actualState.question].extrainfo);
                $('#extraInfo').show();
                popov();
            }
        }
    }

    moveToNextAns(){
        $('#qwin').modal('hide');
        $('#questionButton').hide();
        $('#moveToNextAnsBtn').hide();
        $('#discoverMore').hide();
        $('#extraInfo').hide();

        if(!paths[actualState.pathId].questions[actualState.question].final) {
            $('#ans_list').children().fadeOut(500);
            $('#current_correctans').fadeIn(500);
            // Move to next question if is not the last!
            $('#inst').text("Stiùireadh");
            $('#hint').html(paths[actualState.pathId].questions[actualState.question].hint_nextstep);
            $('#inst').fadeIn(500);
            $('#hint').fadeIn(500);
            this.targetMarker.remove();
            L.marker([actualState.target_lat, actualState.target_lon], {icon: oldtarget}).addTo(this.mymap);
            actualState.question += 1;
            actualState.target_lat = paths[actualState.pathId].questions[actualState.question].lat;
            actualState.target_lon = paths[actualState.pathId].questions[actualState.question].lon;
            actualState.distanceNotification = true;
            actualState.questionNotification = true;
            actualState.savestate();
            popov();
        } else {
            actualState.savestate();
            paths[actualState.pathId].endgame();
        }
    }

    /* Callback function for location update */
    loc_callback(position) {
        /* Update user location pointer and pan to + check signal quality */
        paths[actualState.pathId].mymap.panTo([position.coords.latitude, position.coords.longitude]);
        paths[actualState.pathId].marker.setLatLng([position.coords.latitude, position.coords.longitude]);
        // alert(position.coords.accuracy);
        if (position.coords.accuracy < 20){
            $("#gps").css({"color": "#28a745"});
            $("#gps").text("Good");
        } else if (position.coords.accuracy < 40) {
            $("#gps").css({"color": "#ffc107"});
            $("#gps").text("Ok");
        } else {
            $("#gps").css({"color": "#f44336"});
            $("#gps").text("Bad");
        }
        /* Call the game logic*/
        if(!(typeof actualState === 'undefined')) {
            paths[actualState.pathId].gpsGameLogic(position.coords.latitude, position.coords.longitude);
        }
    }

    initUI() {
        window.actualState = new StateClassic (this.id, 0, null, 0, null, null, null, true, true);
        $('#mapid').show();
        $('#list').show();
        this.setmap();
        window.onresize = this.autoResizeDiv;
        this.autoResizeDiv();
        document.addEventListener('fullscreenchange', (event) => {
            this.autoResizeDiv;
        });
        watchLocation(this.loc_callback, this);
        // this.notifyFullScreen();
    }

    start() {
        actualState.pathId = this.id;
        actualState.question = 0;
        actualState.start_time = new Date().toISOString();
        actualState.target_lat = this.start_lat;
        actualState.target_lon = this.start_lon;
        $('#hint').text("");
        $("#inst").text("Rach gu tòiseach na slighe");
        $("#pathName").text(this.short);
        this.targetMarker =  L.marker([actualState.target_lat, actualState.target_lon], {icon: target}).addTo(this.mymap);
        actualState.savestate();
    }

    endgame() {
        navigator.geolocation.clearWatch(actualState.watchLocationId);
        $('#mapid').hide();
        $('#list').hide();
        var endtime = new Date();
        actualState.end_time = endtime.toISOString();

        var tot_points = actualState.score;
        actualState.score = tot_points;
        actualState.savestate();
        // $('#end_title').text("You won!");
        // $('#end_text').text("Congratulations for completing the game!");
        // addTextToImage_300("https://dev1.rail-suisse.ch/treasure/media/winner_299.png", this.short, date,"No name", tot_points);
        // if (navigator.canShare) { $('#sharebtn').removeClass('hide');}
        // autoresize("finalmsg");
        // $('#finalmsg').fadeIn(500);
        this.endgameui();
    }

}

class PathScavenger extends Path {
    constructor(name,short,id,startplace,start_lat,start_lon,intro,pictures) {
        super(name,short,id,startplace,start_lat,start_lon,intro);
        this.pictures = pictures;
    }

    loc_callback(position) {
        /* Update user location pointer and pan to + check signal quality */
        if (position.coords.accuracy < 20){
            $("#gps").css({"color": "#28a745"});
            $("#gps").text("Good");
        } else if (position.coords.accuracy < 40) {
            $("#gps").css({"color": "#ffc107"});
            $("#gps").text("Ok");
        } else {
            $("#gps").css({"color": "#f44336"});
            $("#gps").text("Bad");
        }
        /* Call the game logic*/
        if(!(typeof actualState === 'undefined')) {
            paths[actualState.pathId].gpsGameLogic(position.coords.latitude, position.coords.longitude);
        }
    }

    gpsGameLogic(lat,lon) {
        var gpsUnlockThreeshold = 16; /*In meters*/
        let d = distance( this.pictures[this.currentslide].lat, 
                          this.pictures[this.currentslide].lon, 
                          lat,
                          lon,
                          'K')*1000;
        // if (d < 500) {
        $('#pic-dist-'+this.currentslide).html(Math.round(d) + " m");
        // }
        if (d<gpsUnlockThreeshold){ /*In meters*/
            $("#pic-unlock-"+this.currentslide).fadeIn(1000);
        } else {
            if(!actualState.found.includes(this.currentslide)) {
                $("#pic-unlock-"+this.currentslide).fadeOut(1000);
            }
        }

    }

    initUI() {
        window.actualState = new StateScavenger (this.id, null, 0, null);
        var carhtml = "";
        carhtml += '<div id="picturescar" class="carousel slide" data-ride="carousel" data-interval="false">';
        carhtml += "<ol class='carousel-indicators'>";
        this.pictures.forEach((element, index) => {
            let active = (index==0) ? "class='active'" : "";
            carhtml += "<li data-target='#picturescar' data-slide-to='"+index+"'"+active+"></li>";
        });
        carhtml += "</ol>";
        carhtml += "<div class='carousel-inner'>";
        this.pictures.forEach((element, index) => {
            let active = (index==0) ? "active" : "";
            let hints = "";
            if (element.hint1 != 0){
                hints += "<u id='pic-hintb1-"+index+"'>Fosgail hint 1</u>";
            }
            if (element.hint2 != 0){
                hints += "<u id='pic-hintb2-"+index+"' class='hide'>Fosgail hint 2</u>";
            }
            if (element.hint3 != 0){
                hints += "<u id='pic-hintb3-"+index+"' class='hide'>Fosgail hint 3</u>";
            }
            carhtml += "<div class='carousel-item "+active+"' style='background-image: url(\""+element.src+"\");'>\
                        <!--img class='d-block img-fluid' src='"+element.src+"'-->\
                            <div class='carousel-caption topcaption'>\
                                <h4 id='pic-hint1-"+index+"' class='hide'>"+element.where+"</h4>\
                                <p id='pic-dist-"+index+"'></p>\
                                <span id='pic-found-"+index+"' class='btn btn-success mx-auto hide'><img src='media/check.png' style='height:25px;width:30px;padding:2px;vertical-align:bottom' /></span>\
                            </div>\
                            <div class='carousel-caption'>\
                                <button id='pic-unlock-"+index+"' type='button' class='btn btn-success mx-auto mb-3 hide'>Fosgail</button>\
                                "+hints+"\
                            </div>\
                        </div>";
        });
        carhtml += "<a class='carousel-control-prev' href='#picturescar' role='button' data-slide='prev'>\
                        <span class='carousel-control-prev-icon' aria-hidden='true'></span>\
                        <span class='sr-only'>Previous</span>\
                    </a>\
                    <a class='carousel-control-next' href='#picturescar' role='button' data-slide='next'>\
                        <span class='carousel-control-next-icon' aria-hidden='true'></span>\
                        <span class='sr-only'>Next</span>\
                    </a>";
        carhtml += "</div>";
        /* Spawn carousel */
        $('#picturescarcont').html(carhtml);
        $('#picturescarcont').fadeIn(2000);
        this.currentslide = 0;
        /* Location */
        watchLocation(this.loc_callback, this);
        /* Event listeners on carousel */
        $('#picturescar').on('slid.bs.carousel', function (e) {
            var slideto = $(this).find('.active').index();
            var spinner = '<div class="spinner-grow" role="status">\
                              <span class="sr-only">Loading...</span>\
                           </div>';
            $('#pic-dist-'+slideto).html(spinner);
            paths[actualState.pathId].currentslide = slideto;
        });
        this.pictures.forEach((_,index) => {
            
            $("#pic-hintb1-"+index).off().click(function () {
                $("#pic-hintb1-"+index).text("Open hint 1");
                actualState.score -= 2;
                actualState.savestate();
                openQuestion("Hint 1",paths[actualState.pathId].pictures[index].hint1);
                if (paths[actualState.pathId].pictures[index].hint2 != 0){
                    $("#pic-hintb2-"+index).fadeIn(1000);
                }
                $("#pic-hintb1-"+index).off().click(function () {
                    openQuestion("Hint 1",paths[actualState.pathId].pictures[index].hint1);
                });
            });

            $("#pic-hintb2-"+index).off().click(function () {
                $("#pic-hintb2-"+index).text("Open hint 2");
                actualState.score -= 4;
                actualState.savestate();
                openQuestion("Hint 2",paths[actualState.pathId].pictures[index].hint2);
                if (paths[actualState.pathId].pictures[index].hint3 != 0){
                    $("#pic-hintb3-"+index).fadeIn(1000);
                }
                $("#pic-hintb2-"+index).off().click(function () {
                    openQuestion("Hint 2",paths[actualState.pathId].pictures[index].hint2);
                });
            });

            $("#pic-hintb3-"+index).off().click(function () {
                $("#pic-hintb3-"+index).text("Open hint 3");
                actualState.score -= 6;
                actualState.savestate();
                openQuestion("Hint 3",paths[actualState.pathId].pictures[index].hint3);
                $("#pic-hintb3-"+index).off().click(function () {
                    openQuestion("Hint 3",paths[actualState.pathId].pictures[index].hint3);
                });
            });

            $("#pic-unlock-"+index).click(function () {
                if(!actualState.found.includes(index)) {
                    actualState.found.push(index);
                    actualState.score += 12;
                    actualState.savestate();
                    $("#pic-unlock-"+index).text("Barrachd fiosrachaidh");
                    $("#pic-hintb-"+index).off();
                    $("#pic-hintb-"+index).hide();
                    $("#pic-dist-"+index).hide();
                    $("#pic-hint1-"+index).fadeIn(1000);
                    $("#pic-found-"+index).fadeIn(1000);
                    paths[actualState.pathId].checkend();
                }
                openQuestion(paths[actualState.pathId].pictures[index].where,paths[actualState.pathId].pictures[index].background);
                console.log(actualState.found);
            });
        });

        var carheight = window.innerHeight - $("#picturescar").position().top +'px'; 
        $(".carousel-item").css("height",carheight);
        document.addEventListener('fullscreenchange', (event) => {
            var carheight = window.innerHeight - $("#picturescar").position().top +'px'; 
            $(".carousel-item").css("height",carheight);
        });


        let queryString2 = window.location.search;
        let urlParams2 = new URLSearchParams(queryString2);
        if (urlParams2.has('cheating')){
            let tofind = JSON.parse(urlParams2.get('cheating'));
            actualState.found = tofind;
            actualState.savestate();
        }
        // this.notifyFullScreen();
    }

    start() {
        actualState.pathId = this.id;
        actualState.question = 0;
        actualState.start_time = new Date().toISOString();
        actualState.target_lat = this.start_lat;
        actualState.target_lon = this.start_lon;
        $("#pathName").text(this.short);
        actualState.savestate();
    }

    checkend() {
        if (actualState.found.length == this.pictures.length ) {
            this.pictures.forEach((_,index) => {
                $("#pic-found-"+index).text("CUR CRÌOCH AIR A’ GHEAMA");
                $("#pic-found-"+index).click(function () {
                    paths[actualState.pathId].endgame();
                });
                // openQuestion("End of the game","<p>Congratulations! You found all the locations! You can now end the game</p> <span onclick='paths[actualState.pathId].endgame();' class='btn btn-success mx-auto hide'>END THE GAME</span>")
            })
        }
    }

    endgame() { 
        navigator.geolocation.clearWatch(actualState.watchLocationId);
        $('#picturescarcont').hide();
        var old_endtime = actualState.end_time;
        var endtime = new Date();
        actualState.end_time = endtime.toISOString();

        var tot_points = actualState.score;
        if (old_endtime == 0) {
            actualState.score = tot_points;
        }
        actualState.savestate();
        // $('#end_title').text("You won!");
        // $('#end_text').text("Congratulations for completing the game!");
        // addTextToImage_300("https://dev1.rail-suisse.ch/treasure/media/winner_299.png", this.short, date,"No name", actualState.score);
        // if (navigator.canShare) { $('#sharebtn').removeClass('hide');}
        // autoresize("finalmsg");
        // $('#finalmsg').fadeIn(500);
        this.endgameui();
    }
}