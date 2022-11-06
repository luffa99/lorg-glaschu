/* MC description 
    MultipleChoice(
        where: any,         Nome del luogo
        lat: any,           Latitudine del punto
        lon: any,           Longitudine del punto
        background: any,    Informazioni di background (formattate HTML)
        question: any,      La domanda
        hint: any,          Messaggio una volta risolto -> indizio per il prossimo punto
        answers: any,       Risposte
        correctans: any,    Risposta corretta
        isfinal: any,       Se è la domanda finale
        extrainfo: any      Informazioni extra (formattate HTML) -> indicare 0 se non ci sono informazioni extra
    )

    modello:
*/

/* X è il numero del percorso, Y il numero progressivo del punto/domanda */
const pXqY = new MultipleChoice(
    /* Nome del luogo */            "",
    /* Latitudine del punto */      0,
    /* Longitudine del punto */     0,
    /* Info di background (HTML) */ "<p></p>",
    /* La domanda */                "",
    /* Inidizio prossimo punto */   "",
    /* Risposte */                  new Array("","",""),
    /* Risposta corretta */         0,
    /* Se è la domanda finale */    false,
    /* Informazioni extra (HTML) */ 0
)

const p1q1 = new MultipleChoice(
    "Plaig aig Speirs Wharf/Port Dundas",
    55.871389,
    -4.258056,
    "",
    "<p>Smaoinich air a bhith nad sheasamh an seo o chionn mu 200 bliadhna. Dh’fheumadh tu gluasad a-mach às an rathad gu luath, oir cha robh e cho sàmhach ‘s a tha e san latha an-diugh!</p>\
    <p>B’ àbhaist seo a bhith am measg nam prìomh phuirt ann an Glaschu, agus bha e cudromach airson gnìomhachais na sgìre, far an deach mòran fhactaraidhean a stèidheachadh.  Bha an Canàl eadar an Abhainn Chluaidh is Linne Fhoirthe deiseil aig deireadh an 18mh linn. An uair sin, dh’fhaodadh gràn, <a class='trans' data-content='wood, timber'>fiodh</a>, meatailt, siùcar agus an leithid a ghluasad gu h-èifeachdach bho thaobh an iar gu taobh an ear na h-Alba. Cha robh seo a’ ciallachadh <a class='trans' data-content='wealth'>beairteas</a> dhan a h-uile duine idir. Ged a bha feadhainn soirbheachail agus a’ cruinneachadh fortan, bha tòrr dhaoine eile ann an droch shuidheachadh-obrach anns na factaraidhean, agus daoine eile fhathast air an <a class='trans' data-content='slavery'>dubh-shaothrachadh</a> ann am planntachasan thall thairis.</p>\
    <p>Fad ’s a tha thu a’ coiseachd ri taobh a’ chanàl, bidh thu...\
    <ul>\
        <li>ag ionnsachadh barrachd mu eachdraidh an àite seo</li>\
        <li>a’ faicinn dè tha air fhàgail bho diofar amannan</li>\
        <li>agus a’ freagairt cheistean gus an ath àite-stad a ruigsinn.</li>\
    </ul></p>\
    <p>Seo dhut a’ chiad cheist:</p>\
    <p>Cuin a chaidh an obair a chriochnachadh airson an canàl seo a thogail?</p>",
    "Sin thu! Coisich dhan ath-drochaid. Bidh mi a’ snàmh ri do thaobh...",
    new Array("1768","1790","1970"),
    1,
    false,
    "<div><ul class='p-2'>\
    <li>Dealbh-cluiche air a dhèanamh mar phàirt de Fèisean nan Gaidheal, ag innse sgeulachd mu nighean à Guidheàna a chaidh a thoirt às an dùthaich aice fhèin le a h-athair, aig an robh planntachasan, a chaidh a’ fuireachd air an Eilean Dubh ann an 1816.\
    <p><a href='https://vimeo.com/466829060/9f747e6da4?embedded=true&source=video_title&owner=8699768' class='underline' target='_blank'>https://vimeo.com/46682906...</a></p></li>\
    \
    <li>Barrachd goireasan air:<p><a href='https://www.feisean.org/proiseactan/meanbh-chuileag-theatar-oideachaidh/  ' class='underline' target='_blank'>https://www.feisean.org/proiseactan...</a></p></li>\
    \
    <li>(Beurla) Loidhne-tìde agus barrachd fiosrachaidh air eachdraidh a’ chanàil: <p><a href='https://www.scottishcanals.co.uk/heritage/forth-clyde-canal/' class='underline' target='_blank'>https://www.scottishcanals.co.uk/heri...</a></p></li></div>"
);

const p1q2 = new MultipleChoice(
    "Drochaid",
    55.874722,
    -4.257778,
    "",
    "<p>An latha an-diugh, chì thu togalaichean àrda le cafaidhean, flataichean agus oifisean spaideil air taobh eile a’ canàil. Ach b’ e stòrasan-sìl, muilleanan-gràine, <a class='trans' data-content='sugar refinery'>fìneadair-siùcair</a>, agus togalach wheatsheaf a bh’ annta aig àm nuair a bha an canàl ga chleachdadh mar shlighe-mhalairt.</p>\
    <p>Tha thu air drochaid a ruigsinn a-nis. Ann an 1941, aig àm an dàrna cogaidh, thòisich na <a class='trans' data-content='air raids'>ruathair-adhar</a>. B’ e Glaschu fear de na bàiltean na bu chudromaiche air sgàth a ghnìomhachais. Mar sin, bha am baile na thargaid <a class='trans' data-content='bombing'>bòmaidh</a>. Chaidh <a class='trans' data-content='stop locks'>locan-casgaidh</a> a thogail air a chanàl, air eagal ‘s gun deach Glaschu a <a class='trans' data-content='flooding'>thuileachadh</a>. Tha iad nam pàirt den dhrochaid a-nis, sin na tha thu a’ faicinn san uisge!</p>\
    <!--div class='card bg-info mb-2'>\
        <div class='card-header'>\
        Faclan Feumail\
        </div>\
        <div class='card-body font-italic'>\
        ruathair-adhar: air raids<br />\
        locan-casgaidh: stop locks\
        </div>\
    </div-->\
    <p>Coisich tarsainn air na drochaide. Bidh faiceallach! Tha sreath dhe chlachan ann. An urrainn dhut an cunntadh?</p>",
    "<img src='media/pesce.png' class='float-left' style='height:auto;width:150px;padding:2px'><p>Glè mhath! Rach air ais agus lean ort air a’ phrìomh slighe. Feuch gun lorg thu mapa. Tha sin a’ dol a shiubhal tro eachdraidh, agus chan eil sinn airson a bhith air chall!</p>",
    new Array ("4","7","10"),
    1,
    false,
    0 /* extra info */
);

const p1q3 = new MultipleChoice(
    "Mapaichean",
    55.876111, 
    -4.259444,
    "",
    "<p>Seall, cò ris a bha Glaschu coltach o chionn mòran bhliadhnaichean. Abair atharrachadh!<br />\
    Bhuin na ballachan faisg oirt ri <a class='trans' data-content='cottage, shed, bothy'>bothain</a>. Tha uinneagan agus dorsan fhathast ri fhaicinn!<img src='media/canalan/bothan.jpg' class='img-fluid p-2'></img></p>\
    ‘S dòcha nach bidh thu gam chreidsinn, ach chaidh dealbhan a pheantadh agus a thogail de mo shinnsearan dìreach fair a bheil thu an-dràsta! Ach…chaidh iad air a mheasgachadh, òbh òbh! An cuidicheadh thu gan cur ann an òrdugh, a’ tòiseachadh leis an dealbh as sìne? Bidh na mapaichean feumail...<img src='media/canalan/Iasg_dealbhan.png' class='p-2 img-fluid'></img>",
    "‘S math a rinn thu! Ged a tha a’ mhòr chuid de na seann  uinneagan agus dorsan duinte/blocked off a-nis, tha tè ann a tha fhathast fosgailte. B’ àbhaist taigh-seinnse a bhith ann. Lorg e! <a href='https://canmore.org.uk/site/217782/glasgow-bairds-brae-houses' class='underline' target='_blank'>Barrachd fiosrachaidh</a>",
    new Array ("132","123","231"),
    2,
    false,
    0
);

const p1q4 = new MultipleChoice(
    /* Nome del luogo */            "Old Basin Tavern",
    /* Latitudine del punto */      55.876667,
    /* Longitudine del punto */     -4.261111,
    /* Info di background (HTML) */ "<p>Sin thu! Seo làrach taigh-seinnse (The Old Basin Tavern) agus <a class='trans' data-content='brewery'>taighe-ghrùdaireachd</a>. B’ ann ann an aìte goireasach a bh’ ann, gu sònraichte nuair a bha an canàl na bu thrainge le taistealaichean agus mar shlighe-malairt.</p>\
                                    <p>Tha dealbhan rim faicinn \
                                        <a href='https://canmore.org.uk/site/217782/glasgow-bairds-brae-houses?display=collection&GROUPCATEGORY=5' class='underline' target='_blank'>an seo</a>\
                                    </p>",
    /* La domanda */                "Tha blocaichean cloiche air do chulaibh…feuch gun lorg thu an cruth seo? <img src='media/canalan/lochend.jpeg' class='p-2 img-fluid'></img>",
    /* Inidizio prossimo punto */   "Sgoinneil! Rach tarsainn air an drochaid taobh eile an cànal. Tha na togalaichean geala an seo am measg nan togalaichean nas sìne a th’ann faisg air làimh.",
    /* Risposte */                  new Array("Johnston","Lochend","Woodend"),
    /* Risposta corretta */         1,
    /* Se è la domanda finale */    false,
    /* Informazioni extra (HTML) */ 0
);

const p1q5 = new MultipleChoice (
    /* Nome del luogo */            "Applecross wharf",
    /* Latitudine del punto */      55.876944, 
    /* Longitudine del punto */     -4.260278,
    /* Info di background (HTML) */ "",
    /* La domanda */                "<p>Sgoinneil fhèin! Tha thu an-nis a’ coimhead air sreath de bhuth-obhraichean, gealaichte le <a class='trans' data-content='lime'>aol</a>, agus air  seann taigh-drochaidiche. Chaidh an taigh a thogail mu timcheall air 1790. Nas fhaide air adhairt, bha einnseinair Hugh Baird a’ fuireach an seo, mas fhìor, fad ‘s a bha e a’ deilbheadh Canàl an Aonaidh.</p><p><a href='https://canmore.org.uk/site/217779/glasgow-forth-and-clyde-canal-5-7-applecross-street-rockvilla-house?display=collection&GROUPCATEGORY=5' class='underline' target='_blank'>Dealbhan</a></p><img src='media/canalan/applecross.jpg' class='img-fluid p-2'></img>\
                                    Dè an seòrsa stuth a bhiodh daoine a’ cleachdadh gus na canàlan a chumail slàn agus <a class='trans' data-content='water-tight'>uisge-dhìonach</a>?",
    /* Inidizio prossimo punto */   "Math dhà-riribh! Tha àite sònraichte ann far am faighear crè airson an obair seo… chan eil e ro fhada air falbh! Cùm ort a’ coiseachd ri taobh a’ chanàil, tha thu air an t-slighe ceart...",
    /* Risposte */                  new Array("fiodh","crè [clay]","iarann [iron]"),
    /* Risposta corretta */         1,
    /* Se è la domanda finale */    false,
    /* Informazioni extra (HTML) */ 0
);

const p1q6 = new MultipleChoice (
    /* Nome del luogo */            "Claypits",
    /* Latitudine del punto */      55.878889, 
    /* Longitudine del punto */     -4.266944,
    /* Info di background (HTML) */ "<img src='media/pesce.png' class='float-left' style='height:auto;width:150px;padding:2px'><p>Sin thu fhèin! Seo far an robh <a class='trans' data-content='clay pit'>poll-criadha</a> a bha cho cudromach airson an canàl a chumail uisge-dhìonach. An-diugh, ’s e <a class='trans' data-content='nature reserve'>tèarmann-nàdair</a> a th’ ann. Àite uabhasach fhèin math airson beagan fois a ghabhail as dèidh dhut coiseachd air an slighe-ionmhais seo còmhla rium.</p><img src='media/canalan/claypits.jpg' class='img-fluid p-2'></img>\
    <button type='button' onclick=\"$('#qwin').modal('hide'); setTimeout(() => paths[actualState.pathId].moveToNextAns(), 500)\" class='btn btn-warning m-2'>Cuir chrioch air a' gheama</button>",
    /* La domanda */                "Tha mi ‘n dòchas gun do chòrd an t-slighe riut!",
    /* Inidizio prossimo punto */   "",
    /* Risposte */                  new Array("Cuir crìoch air a' gheama"),
    /* Risposta corretta */         0,
    /* Se è la domanda finale */    true,
    /* Informazioni extra (HTML) */ 0
);

const p1 = new PathClassic (
    /*Path name */      "Canàlan na h-Alba",
    /*Short name */     "Canàlan na h-Alba",
    /* Id */            1,
    /*Startplace */     "Plaig Speirs Wharf/Port Dundas",
    /*Start_lat*/       55.871389,
    /*Start_lon*/       -4.258056,
    /*Intro (HTML)*/    "<img src='media/headers/1.webp' class='img-fluid p-2'></img><p>Gabh cuairt còmhla rinn ri taobh a’ chànail. Bidh sinn ag ionnsachadh barrachd mu dheidhinn eachdraidh na\
    <a class='trans' data-content='trade route'>slighe-mhalairt</a>\
     cudromach seo eadar Abhainn Chluaidh agus Linne Foirthe, mun iomadh diofar gnìomhachas a bha co-cheangailte ris, agus mu bheatha dhaoine a bhiodh ag obair ann. Glèidh do shùil fosgailte, tha tòrr àrc-eòlais ann ri fhaicinn!</p>\
    <div class='card bg-info my-2'><div class='card-body'>\
    <div class='row'><div class='col-4 p-0 m-0'><img src='media/pesce.png' style='height:auto;width:150px;padding:2px'></div><div class='col-8'>\
    “Halò! ’S mise an t-iasg nach do rinn snàmh. ‘S dòcha gun aithnich thu mi, tha mi a’ fuireach air \
    <a class='trans' data-content='symbol, coat of arms'>suaicheantas</a> Baile Ghlaschu! An-diugh, ge-tà, tha mi air an t-suaicheantas fàgail gus bi cothrom agam a bhith nam threòraiche dhut. Bidh mi a’ snàmh ri do thaobh agus bidh mi gad chuideachadh le beagan stiùiridh.\
    </div></div></div></div>\
    <p><a class='underline' href='https://www.google.com/maps/dir//55.871389,-4.258056/@55.871389,-4.258056,17z/data=!4m10!1m7!3m6!1s0x0:0x3219e59605b74cf8!2zNTXCsDUyJzE3LjAiTiA0wrAxNScyOS4wIlc!3b1!8m2!3d55.871389!4d-4.258056!4m1!3e1' target='_blank'>Rach gu toiseach na slighe</a></p>",
    /*Questions*/       new Array(p1q1,p1q2,p1q3,p1q4,p1q5,p1q6)
);

/* Pictures are questions for scavenger game 

for pictures in hint always use img-fluid class:
    <img src='media/scavenger2/staidhre2.webp' class='img-fluid'></img>

model:
*/
const pYqX = new Picture (
    /*where: name of place / hint 1 (short!)*/      "", 
    /*lat of point*/                                0, 
    /*lon of point */                               0,
    /*Information about point (HTML) */             "<p></p>",
    /*Hint1: formatted HTML, picture, ... */         "",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/"
);

const p2q1 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Tobar nan trì craobh", 
    /*lat of point*/                                55.882222,  
    /*lon of point */                               -4.291944,
    /*Information about point (HTML) */             "<p>A rèir nam mapaichean, bha <a class='trans' data-content='spring (water)'>fuaran</a> no tobar ann an seo, air an robh “Three trees well”. Tha an tobair a’ nochdad mar “Three Trees Well” no “Pear-tree Well” ann an <a class='trans' data-content='accounts'>aithrisean</a> bhon 19mh linn agus tràth san 20mh linn. Bha <a class='trans' data-content='debate'>deasbad</a> ann aig an àm am measg nan eòlaichean mu dè an t-ainm ceart a bh’ air, a rèir coltas!<br>\
Bha cuid den beachd gur e <a class='trans' data-content='healing well'>tobar-slàinte</a> a bh’ann, gun robh <a class='trans' data-content='healing properties'>comas leigheasach</a> aig an uisge. Ged a tha na cunntasan bhon àm sin caran romansach, agus iad a’ cur cuideam air boidheach an àite agus air coiseachd <a class='trans' data-content='pleasant'>tlachdmhor</a> air bruachan Ceilbhinn, tha e gu math furasta a bhith a’ beachdachadh air cò ris a bha an t-àite seo coltach aig an àm, fiu ‘s an latha an-diugh.</p>\
    <p><a href='https://archive.org/details/bygoneglasgowske00smal/page/n161/mode/2up?view=theater' class='underline' target='_blank'>https://archive.org/details/bygoneglasgowske00smal/page/n161/mode/2up?view=theater</a></p>\
    <div class='card bg-info'><div class='card-header'>\
    <img src='media/trowel128w.png' style='height:50px;width:50px;padding:2px;vertical-align:top'></div>\
    <div class='card-body'>\
    Tha seann mhapaichean uabhasach feumail do àrc-eòlaichean. Ged a tha <a class='trans' data-content='archaeological dig'>cladhach àrc-eòlais</a> na phàirt chudromach den obair (agus gu deabh, ’s dòcha gur e sin am pàirt air a bhios sinn a’ smaoineachadh na bu trice nuair a chluinneas sinn am facal “àrc-eòlas”), tha dreuchdan eile ann air a bheil sinn feumach. Tha <a class='trans' data-content='studying, examination'>sgrùdadh</a> air seann mhapaichean, sgìobhannan, agus aithsigean <a class='trans' data-content='required'>riatanach</a> mus tòisichear air cladhach.</div></div>",
    /*Hint1: formatted HTML, picture, ... */         "<h3>Tobar nan trì craobh</h3><img src='media/scavenger2/map.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/tobar.webp"
);

const p2q2 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Taigh agus drochaid “halfpenny”", 
    /*lat of point*/                                55.881389, 
    /*lon of point */                               -4.291667 ,
    /*Information about point (HTML) */             "<p>Tha an t-àite seo air atharrachadh gu mòr thar nan linntean. Aig an tòiseach, tha e coltach gun robh <a class='trans' data-content='ford'>àthann</a> ann. An uair sin chaidh drochaidean a thogail, an drochaid “ha’penny” nam measg. B’ e drochaid le <a class='trans' data-content='lattice girdle'>teannadair laitise</a> a bh’ ann, agus chaidh a h-ainmeachadh air a’ chìs a bhiodh <a class='trans' data-content='landowner'>uachdaran</a> taigh Kelvinside ag iarraidh air duine sam bith a bhiodh airson dol thairis air an abhainn. Chaidh an drochaid as ùire a chruthachadh anns na ‘90.</p>\
    <div class='card bg-info'><div class='card-body'>\
    <img src='media/pettirosso.png' class='img-fluid'><p>\"‘<a class='trans' data-content='It is hardly surprising'>S beag an t-iongnadh</a> nach robh muinntir an àite toilichte gun robh aca ri pàigheadh airson dol taobh eile na h-aibhne!\"</p></div></div>",
    /*Hint1: formatted HTML, picture, ... */         "Faisg air corra-ghlas nach bidh ag iteig…",
    /*Hint2: formatted HTML, picture, ... */         "<img src='media/scavenger2/halfpenny_bridge.webp' class='img-fluid'></img>",
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/halfpenny_house.webp"
);

const p2q3 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Na 60 steap", 
    /*lat of point*/                                55.879167,
    /*lon of point */                               -4.284167,
    /*Information about point (HTML) */             "<p>Bha an staidhre seo, air a bheil “the 60 steps” agus am balla air an deilbheadh le Alexander “an Greugach” Thomson. B’ e <a class='trans' data-content='architect'>ailtire</a> ainmeil a bh’ ann agus dh’fhuair e a <a class='trans' data-content='nickname'>fhar-ainm</a> air sgàth an stoidhle aige. Bhiodh drochaidh a’ ceangal Great Western Road le Kelvinside, ach chan eil ach pìosan de na <a class='trans' data-content='platforms'>cidhean</a> air fhàgail an dràsta. Bha an drochaid cudromach do leudachadh a’ bhaile air taobh seo na aibhne.</p>",
    /*Hint1: formatted HTML, picture, ... */         "<img src='media/scavenger2/staidhre2.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/staidhre1.webp"
);

const p2q4 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Muileann <a class='trans' data-content='flint'>clach-spor</a>", 
    /*lat of point*/                                55.877778, 
    /*lon of point */                               -4.282222,
    /*Information about point (HTML) */             "<p>Clachan-mhuillin. Chaidh a chiad mhuillean air a thogail an seo ann an 1765, air fearann a bhuineadh do North Kelvindale Estate. B’ e <a class='trans' data-content='barley mill'>muillean-eòrna</a> a bh’ ann agus chaidh a chleachdadh cuideachd airson <a class='trans' data-content='gunpowder'>fùdar-gunna</a> a bhleith aig àm cogaidh Napoleon.</p><p>Clach-spor: Flint</p><u>Àith / kiln</u><p>Bhiodh clach-spor agus <a class='trans' data-content='coal'>gual</a> a’ chur anns an àith, far am <a class='trans' data-content='grinding'>biodh</a> e a’ losgadh fad trì làithean mus biodh e deiseil airson bleith. As dèidh sin, bhiodh i air a <a class='trans' data-content='made into a paste'>tionndadh gu glaodh</a>, agus mu dheireadh-thall bhiodh an glaodh air a chleachadh airson crè a <a class='trans' data-content='glazing'>ghlainneachadh</a>.</p>",
    /*Hint1: formatted HTML, picture, ... */         "<img src='media/scavenger2/brick.webp' class='img-fluid'>",
    /*Hint2: formatted HTML, picture, ... */         "<img src='media/scavenger2/kiln.webp' class='img-fluid'>",
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/Clach_mhuillin.webp"
);

//TODO: check coords
const p2q5 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Uaireadair-grèine", 
    /*lat of point*/                                55.879099778195254, 
    /*lon of point */                               -4.289864635154586,
    /*Information about point (HTML) */             "<p>Tha bonn a’ <a class='trans' data-content='sundial'>ghrian-cloiche</a> seo na chlach-mhuillinn a bha air fhàgail as an t-seann mhuillean ann an North Woodside.</p>\
    <div class='card bg-info'><div class='card-body'>\
    <img src='media/pettirosso.png' class='img-fluid'><p>“’S math a rinn thu! “</p><p>Ann an àrc-eòlas, bidh sinn a’ faicinn gu math tric rudan a chaidh an cleachdadh a-rithist airson rudeigin ùr a thogail.</p></div></div>",
    /*Hint1: formatted HTML, picture, ... */         "<img src='media/scavenger2/sundial_easy.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/sundial_hint.webp"
);

const p2q6 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Tuil-dhoras", 
    /*lat of point*/                                55.878333, 
    /*lon of point */                               -4.284167,
    /*Information about point (HTML) */             "<p>Slighe le geata leis an gabh sruthadh an uisge a stad no a stiùireadh. Bha seo na phàirt den mhuillean.</p><p>Tuil-dhoras: sluice</p>\
    <div class='card bg-info'><div class='card-body'>\
    <img src='media/pettirosso.png' class='img-fluid'><p>“Math fhèin!”</p></div></div>",
    /*Hint1: formatted HTML, picture, ... */         0,
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/sluice.webp"
);

const p2q7 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Lad agus caraidh", 
    /*lat of point*/                                55.878889,
    /*lon of point */                               -4.284722,
    /*Information about point (HTML) */             "<p>Lad a bhiodh a’ toirt uisge dhan mhuileann.</p><p>Lad: lade<br />Caradh: Weir</p>",
    /*Hint1: formatted HTML, picture, ... */         0,
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/lade_weir.webp"
);

const p2q8 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Drochaid Bhictorianach", 
    /*lat of point*/                                55.879722,
    /*lon of point */                               -4.288056,
    /*Information about point (HTML) */             "<p>Drochaid-choise bho dheireadh an 19mh linn, a chaidh a thogail gus am biodh an Gàrradh Lùsan nas fhasa a ruigsinn bho Kelvinside.</p>\
    <div class='card bg-info'><div class='card-body'>\
    <img src='media/pettirosso.png' class='img-fluid'><p>\"Glè mhath, agus abair sealladh! ’S toil leam fois a ghabhail an seo nuair nach eil mi air an sgèith.\"</p></div></div>",
    /*Hint1: formatted HTML, picture, ... */         0,
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/drochaid_bhictorianach.webp"
);

const p2q9 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Muillean Garrioch", 
    /*lat of point*/                                55.880556,
    /*lon of point */                               -4.288889,
    /*Information about point (HTML) */             "<p>Ged nach eil sgàth ri fhaicinn an-dràsta, tha thu nad sheasamh air làrach muillin!</p>",
    /*Hint1: formatted HTML, picture, ... */         "<h3>Muillean Garrioch</h3><img src='media/scavenger2/m_hint.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         "Feuch am faigh thu dhan àite far an robh muillean clach-spor agus muillean-flùr",
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/sign.webp"
);

const p2q10 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Plaig chuimhneachaidh", 
    /*lat of point*/                                55.878056, 
    /*lon of point */                               -4.282222,
    /*Information about point (HTML) */             "<p>Abair sgeulachd! Tha e do-chreidsinneach gun do tachair an leithid, nach eil? Gu dearbh, chan eil a’ <a class='trans' data-content='plaque'>phlaig</a> seo ann ach airson <a class='trans' data-content='prank, fun'>fealla-dhà</a>! Nuair a nochd i, cha robh fios fiù ‘s aig Comhairle Baile Ghlaschu carson a bha i ann...</p><div class='card bg-info'><div class='card-body'>\
    <ol><li>A bheil thu eòlach air ròlaist mar seo? </li><li>Dè cho cudromach ‘s a tha e a bhith faiceallach nuair a tha sinn airson fios faighinn mu dheidhinn làrach àrc-eòlach no tachartas ann an eachdraidh?</li></ol></div></div>",
    /*Hint1: formatted HTML, picture, ... */         0,
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/spoof.webp"
);

const p2 = new PathScavenger (
    "Ceilbhinn - gnìomhachas agus cur-seachadan",
    "Ceilbhinn",
    2,
    "n/a",
    null,
    null,
    "<img src='media/headers/2.webp' class='img-fluid p-2'></img>\
    <p>An-diugh, ’s e àite breagha agus gu math sàmhach a th’ ann an abhainn Cheilbhinn, le slighe mòr-chòrdte airson coiseachd, ruith is rothaireachd feadh na h-aibhne. O chionn dìreach dà cheud bliadhna, ge-tà, bha coltas gu math eadar-dhealaichte air an sgìre seo. Gàrraidhean agus slìghean sàmhach, obair cruaidh gnìomhachais, <a class='trans' data-content='architecture'>ailtireachd</a> spaideil agus am bàile a’ <a class='trans' data-content='expanding'>leudachadh</a> far an robh achaidhean ann… abair cruth-tìr <a class='trans' data-content='full of contrasts'>iomsgarach</a>, a’ sìor-atharrachadh tro eachdraidh còmhla ri beatha daoine na sgìre.</p>\
    <p>Ghabhaibh cuairt còmhla rinn gus faighinn a-mach mu chuid de na bhiodh a’ dol air <a class='trans' data-content='(river)banks'>bruachan</a> Cheilbhinn. <a class='trans' data-content='Look for the place where each photo has been taken. You&#39;ll get some hints from time to time!'>Bidh sibh a’ lorg an àite far an deach gach dealbh a thogail, le beagan cuideachaidh bho àm gu àm…</a></p>\
    <div class='card bg-info p-0 my-2'><div class='card-body p-2'>\
    <img src='media/pettirosso.png' class='img-fluid'><p>“Halò! Is mise Brù-dhearg agus tha mi a’ fuireach ann an suicheantas Baile Ghlaschu còmhla ri mo charaidean: an t-Iasg, an Clag, agus a’ Chraobh. Bidh sinn gad cuideachadh agus gad chuideachadh bho àm gu àm…”</p></div></div>\
    <p>Ged nach eil slighe stèidhichte ann, faodaidh sibh tòiseachadh air a’ gheama aig prìomh gheata nam Botanics. Faodaidh sibh tòiseachadh air agus crìoch a chur air aig àm sam bith, gun a bhith a’ dèanamh an geama air fad san aon latha. Bidh an <a class='trans' data-content='progress'>t-adhartas</a> agaibh air a shabhaladh.<br />\
    Ma tha sibh deiseil is deònach, brùthaibh an seo airson cluich!</p>",
    new Array(p2q1,p2q2,p2q3,p2q4,p2q5,p2q6,p2q7,p2q8,/*p2q9,*/p2q10)
);


const p3q1 = new MultipleChoice(
    /* Nome del luogo */            "Zürich HB - Banhhofquai",
    /* Latitudine del punto */      47.377540789874516, 
    /* Longitudine del punto */     8.541690579582177,
    /* Info di background (HTML) */ "<p>Zürich Hauptbahnhof is the largest railway station in Switzerland. Zürich is a major railway hub, with services to and from across Switzerland and neighbouring countries such as Germany, Italy, Austria, and France. The station was originally constructed as the terminus of the Spanisch Brötli Bahn, the first railway built completely within Switzerland. Serving up to 2,915 trains per day, Zürich HB is one of the busiest railway stations in the world. It was ranked as the second best European railway station in 2020.</p>",
    /* La domanda */                "When were HB electrified?",
    /* Inidizio prossimo punto */   "I would like to take a funicolar...",
    /* Risposte */                  new Array("1923","1903","1913"),
    /* Risposta corretta */         0,
    /* Se è la domanda finale */    false,
    /* Informazioni extra (HTML) */ 0
)

const p3q2 = new MultipleChoice(
    /* Nome del luogo */            "Polybahn",
    /* Latitudine del punto */      47.376532831596, 
    /* Longitudine del punto */     8.544008566772701,
    /* Info di background (HTML) */ "<p>The Polybahn, also known as the UBS Polybahn, is a funicular railway in the city of Zürich, Switzerland. The line links the Central square with the terrace by the main building of ETH Zürich, which was formerly called Eidgenössisches Polytechnikum, and from which the railway derives its name</p>",
    /* La domanda */                "Who is the owner of Polybahn?",
    /* Inidizio prossimo punto */   "I would like to take a funicolar...",
    /* Risposte */                  new Array("CreditSuisse","UBS","ETH"),
    /* Risposta corretta */         1,
    /* Se è la domanda finale */    false,
    /* Informazioni extra (HTML) */ 0
)

const p3q3 = new MultipleChoice(
    /* Nome del luogo */            "ETH Zurich - Polyterrasse",
    /* Latitudine del punto */      47.37623153859316, 
    /* Longitudine del punto */     8.546905203483208,
    /* Info di background (HTML) */ "<p>ETH Zurich (English: ETH; Swiss Federal Institute of Technology in Zürich; German: Eidgenössische Technische Hochschule Zürich) is a public research university in the city of Zürich, Switzerland. Founded by the Swiss Federal Government in 1854 with the stated mission to educate engineers and scientists, the school focuses primarily on science, technology, engineering, and mathematics.</p>",
    /* La domanda */                "How many students study at ETH?",
    /* Inidizio prossimo punto */   "I would like to take a funicolar...",
    /* Risposte */                  new Array("22'000","12'000","30'000"),
    /* Risposta corretta */         0,
    /* Se è la domanda finale */    true,
    /* Informazioni extra (HTML) */ "<p>ETH Zurich was founded on 7 February 1854 by the Swiss Confederation and began giving its first lectures on 16 October 1855 as a polytechnic institute (eidgenössische polytechnische Schule) at various sites throughout the city of Zürich. It was initially composed of six faculties: architecture, civil engineering, mechanical engineering, chemistry, forestry, and an integrated department for the fields of mathematics, natural sciences, literature, and social and political sciences.</p><p>It is locally still known as Polytechnikum, or simply as Poly, derived from the original name eidgenössische polytechnische Schule, which translates to \"federal polytechnic school\".</p>"
)

const p3 = new PathClassic (
    /*Path name */      "Zürich Center",
    /*Short name */     "Zürich Center",
    /* Id */            3,
    /*Startplace */     "Zürich HB",
    /*Start_lat*/       47.377540789874516,
    /*Start_lon*/       8.541690579582177,
    /*Intro (HTML)*/    "<p>Discover the center of Zürich!</p><p><a class='underline' href='https://www.google.com/maps/dir//Z%C3%BCrich+HB,+Bahnhofpl.,+8001+Z%C3%BCrich/@47.3747492,8.5392214,16.71z/data=!4m16!1m6!3m5!1s0x47900a08cc0e6e41:0xf5c698b65f8c52a7!2sZ%C3%BCrich+HB!8m2!3d47.3778579!4d8.5403226!4m8!1m0!1m5!1m1!1s0x47900a08cc0e6e41:0xf5c698b65f8c52a7!2m2!1d8.5403226!2d47.3778579!3e1' target='_blank'>Navigate to start</a></p>",
    /*Questions*/       new Array(p3q1,p3q2,p3q3)
);


/* Contiene tutti i percorsi */
var paths = { 1 : p1, 2 : p2, 3:p3};
