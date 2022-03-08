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
    "Plaig Speirs Wharf/Port Dundas",
    55.871389,
    -4.258056,
    "<p>Smaoinich air a bhith nad sheasamh an seo o chionn mu 200 bliadhna. ‘S mathaid gum feumadh tu gluasad a-mach às an rathad gu luath, oir cha robh e cho sàmhach ‘s a tha e san latha an-diugh! B’ àbhaist seo a bhith am measg nam prìomh phuirt ann an Glaschu, agus bha e cudromach airson gnìomhachais na sgìre, far an deach mòran fhactaraidhean a stèidheachadh. Dh’fhaodadh gràn, fiodh, meatailt, siùcar agus an leithid a ghluasad gu h-èifeachdach bho thaobh an iar gu taobh an ear na h-Alba, bhon a bha an Canàl eadar an Abhainn Chluaidh is Linne Fhoirthe deiseil aig deireadh an 18mh linn. Cha robh seo a’ ciallachadh beairteas dhan a h-uile duine, ge-tà. Ged a bha feadhainn soirbheachail agus a’ cruinneachadh fortan, bha cuid eile ann an droch shuidheachadh-obrach anns na factaraidhean, agus cuid eile fhathast air an dubh-shaothrachadh ann am planntachasan thall thairis.</p>\
    <p>Fad ’s a tha thu a’ coiseachd ri taobh a’ chanàl, bidh thu ag ionnsachadh barrachd mu eachdraidh an àite seo, a’ faicinn dè tha air fhàgail bho diofar amannan, agus a’ freagairt cheistean gus an ath àite-stad a ruigsinn. Seo dhut a’ chiad cheist:</p>",
    "Cuin a chaidh an obair a chriochnachadh airson an canàl seo a thogail?",
    "Sin thu! Coisich dhan ath-drochaid. Bidh mi a’ snàmh ri do thaobh...",
    new Array("1768","1790","1970"),
    1,
    false,
    "IMMAGINE DEL PESCE in background e in ath-cheum\
    \
    BARRACHD FIOSRACHAIDH"
);

const p1q2 = new MultipleChoice(
    "Drochaid",
    55.874722,
    -4.257778,
    "<p>An latha an-diugh, fad s’ a bhios thu a’ coiseachd, chì thu togalaichean àrda le cafaidhean, flataichean agus oifisean spaideil air taoibh eile a’ canàil. Ach b’ e, stòrasan-sìl, muilleanan-gràine, fìneadair-siùcair, agus togalach wheatsheaf a bh’ annta aig àm nuair a bha an canàl ga chleachdadh mar shlighe-mhalairt.</p>\
    <p>Tha thu air drochaid a ruigsinn a-nis. Ann an 1941, aig àm an dàrna cogaidh, thòisich na ruathair-adhar. B’ e Glaschu fear de na bàiltean na bu chudromaiche air sgàth a ghnìomhachais. Uime sin, bha e na thargaid bòmaidh. Chaidh locan-casgaidh a thogail air a chanàl, air eagal ‘s gun deach Glaschu a thuileachadh. Tha iad nam pàirt den dhrochaid a-nis, sin na tha thu a’ faicinn san uisge!</p>",
    "Coisich tarsainn air na drochaide. Bidh faiceallach! Tha sreath dhe chlachan ann. An urrainn dhut an cunntadh?",
    "<p>Glè mhath! Rach air ais agus lean oirt air a’ phrìomh slighe. Feuch gun lorg thu mapa. Tha sin a’ dol a shiubhal tro eachdraidh, agus chan eil sinn airson a bhi air chall!</p><img src='https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/64/22293-fish-icon.png' />",
    new Array ("4","7","10"),
    1,
    false,
    0 /* extra info */
);

const p1q3 = new MultipleChoice(
    "Mapaichean",
    55.876111, 
    -4.259444,
    "Seall, cò ris a bha Glaschu coltach o chionn mòran bhliadhnaichean. Abair atharrachadh!<br />\
    Bhuin na ballachan faisg oirt ri bothain. Tha uinneagan agus dorsan fhathast ri fhaicinn!",
    "‘S dòcha nach bidh thu gam chreidsinn, ach thog mo shinnsearan dealbhan dìreach fair a bheil thu an-dràsta! [3 dealbhan] Ach...chaidh iad air a mheasgachadh, òbh òbh! An cuidicheadh thu gan cur ann an òrdugh? Bidh na mapaichean feumail...",
    "‘S math a rinn thu! Ged a tha a’ mhòr chuid de na seann  uinneagan agus dorsan duinte/blocked off a-nis, tha tè ann a tha fhathast fosgailte. B’ àbhaist taigh-seinnse a bhith ann. Lorg e! <a href='https://canmore.org.uk/site/217782/glasgow-bairds-brae-houses' target='_blank'>See more</a>",
    new Array ("123","321","132","312","213"),
    0,
    false,
    0
);

const p1q4 = new MultipleChoice(
    /* Nome del luogo */            "Dealbh le fear an taigh seinnse",
    /* Latitudine del punto */      55.876667,
    /* Longitudine del punto */     -4.260833,
    /* Info di background (HTML) */ "<p>Sin thu! Seo làrach taigh-seinnse (The Old Basin Tavern) agus taighe-ghrùdaireachd. ‘B ann ann àite goireasach a bh’ ann, gu sònraichte nuair a bha an canàl na bu thrainge le taistealaichean agus mar shlighe-malairt.</p>\
                                    <p>Tha dealbhan rim faicinn an seo:\
                                        <a href='https://canmore.org.uk/site/217782/glasgow-bairds-brae-houses?display=collection&GROUPCATEGORY=5' target='_blank'>open link</a>\
                                    </p>",
    /* La domanda */                "Tha blocaichean cloiche air do chulaibh…feuch gun lorg thu an cruth seo? [immagine]",
    /* Inidizio prossimo punto */   "Sgoinneil! Rach tarsainn air an drochaid taobh eile an cànal. Tha na togalaichean geala an seo am measg nan togalaichean nas sìne a th’ann faisg air làimh.",
    /* Risposte */                  new Array("a","b","c"),
    /* Risposta corretta */         0,
    /* Se è la domanda finale */    true,
    /* Informazioni extra (HTML) */ 0
)

const p1 = new PathClassic (
    /*Path name */      "Canàlan na h-Alba",
    /*Short name */     "Canàlan na h-Alba",
    /* Id */            1,
    /*Startplace */     "Plaig Speirs Wharf/Port Dundas",
    /*Start_lat*/       55.871389,
    /*Start_lon*/       -4.258056,
    /*Intro (HTML)*/    "<p>Intro goes here</p><p><a class='underline' href='https://www.google.com/maps/dir//55.871389,-4.258056/@55.871389,-4.258056,17z/data=!4m10!1m7!3m6!1s0x0:0x3219e59605b74cf8!2zNTXCsDUyJzE3LjAiTiA0wrAxNScyOS4wIlc!3b1!8m2!3d55.871389!4d-4.258056!4m1!3e1' target='_blank'>Rach gu toiseach na slighe</a></p>",
    /*Questions*/       new Array(p1q1,p1q2,p1q3,p1q4)
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
    /*Information about point (HTML) */             "<p>A rèir nam mapaichean , bha fuaran no tobar ann an seo, air an robh “Three trees well”. Tha an tobair a’ nochdad mar “Three Trees Well” no “Pear-tree Well” ann an aithrisean bhon 19mh linn agus tràth san 20mh linn. Bha deasbad ann aig an àm am measg nan eòlaichean mu dè an t-ainm ceart a bh’ air, a rèir coltas! <br />Bha cuid den beachd gun robh comas leigheasach aig an uisge. Ged a tha na cunntasan bhon àm sin caran romansach, agus iad a’ cur cuideam air boidheach an àite agus air coiseachd tlachdmhor air bruachan Ceilbhinn, tha e gu math furasta a bhith a’ beachdachadh air cò ris a bha an t-àite seo coltach aig an àm, fiu ‘s an latha an-diugh.</p>\
    <div class='card bg-info'><div class='card-header'>\
    <img src='media/trowel128w.png' style='height:50px;width:50px;padding:2px;vertical-align:top'></div>\
    <div class='card-body'>\
    Tha seann mhapaichean uabhasach feumail do àrc-eòlaichean. Ged a tha cladach àrc-eòlach na phàirt chudromach den obair (agus gu deabh, ’s dòcha gur e sin am pàirt air a bhios sinn a’ smaoineachadh na bu trice nuair a chluinneas sinn am facal “àrc-eòlas”), tha dreuchdan eile ann air a bheil sinn feumach. Tha sgrùdadh air seann mhapaichean, sgìobhannan, agus aithsigean riatanach mus tòisichear air cladach.</div></div>",
    /*Hint1: formatted HTML, picture, ... */         "<h3>Tobar nan trì craobh</h3><img src='media/scavenger2/map.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/tobar.webp"
);

const p2q2 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Taigh agus drochaid “halfpenny”", 
    /*lat of point*/                                55.881389, 
    /*lon of point */                               -4.291667 ,
    /*Information about point (HTML) */             "<p>Tha an t-àite seo air atharrachadh gu mòr thar nan linntean. Aig an tòiseach, tha e coltach gun robh àthann ann. An uair sin chaidh drochaidean a thogail, an drochaid “ha’penny” nam measg. B’ e drochaid le teannadair laitise a bh’ ann, agus chaidh a h-ainmeachadh air a’ chìs a bhiodh uachdaran taigh Kelvinside ag iarraidh air duine sam bith a bhiodh airson dol thairis air an abhainn. Chaidh an drochaid as ùire a thogail anns na ‘90.</p>",
    /*Hint1: formatted HTML, picture, ... */         "Faisg air corra-ghlas nach bidh ag iteig…",
    /*Hint2: formatted HTML, picture, ... */         "<img src='media/scavenger2/halfpenny_bridge.webp' class='img-fluid'></img>",
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/halfpenny_house.webp"
);

const p2q3 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Na 60 cheum", 
    /*lat of point*/                                55.879167,
    /*lon of point */                               -4.284167,
    /*Information about point (HTML) */             "<p>Bha an staidhre seo, air a bheil “na 60 cheum ” agus am balla air an deilbheadh le Alexander “an Greugach” Thomson. B’ e ailtire ainmeil a bh’ ann agus dh’fhuair e a fhar-ainm air sgàth an stoidhle aige. Bhiodh drochaidh a’ ceangal Great Western Road le Kelvinside, ach chan eil ach pìosan de na cidhean air fhàgail an dràsta. Bha an drochaid cudromach do leudachadh a’ bhaile air taobh seo na aibhne.</p>",
    /*Hint1: formatted HTML, picture, ... */         "<img src='media/scavenger2/staidhre2.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/staidhre1.webp"
);

const p2q4 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Muileann clach-spor", 
    /*lat of point*/                                55.877778, 
    /*lon of point */                               -4.282222,
    /*Information about point (HTML) */             "<p>Clachan-mhuillin. Chaidh a chiad mhuillean air a thogail an seo ann an 1765, air fearann a bhuineadh do North Kelvindale Estate. B’ e muillean-eòrna a bh’ ann agus chaidh a chleachdadh cuideachd airson fùdar-gunna a bhleith aig àm cogaidh Napoleon.</p><u>Àith / kiln</u><p>Bhiodh clach-spor agus gual a’ chur anns an àith, far am biodh e a’ losgadh fad trì làithean mus biodh e deiseil airson bleith. As dèidh sin, bhiodh i air a tionndadh gu glaodh, agus mu dheireadh-thall bhiodh an glaodh air a chleachadh airson crè a ghlainneachadh.</p>",
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
    /*Information about point (HTML) */             "<p>Tha bonn a’ ghrian-cloiche seo na chlach-mhuillinn a bha air fhàgail as an t-seann mhuillean ann an North Woodside.</p>",
    /*Hint1: formatted HTML, picture, ... */         "<img src='media/scavenger2/sundial_easy.webp' class='img-fluid'></img>",
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/sundial_hint.webp"
);

const p2q6 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Tuil-dhoras", 
    /*lat of point*/                                55.878333, 
    /*lon of point */                               -4.284167,
    /*Information about point (HTML) */             "<p>Slighe le geata leis an gabh sruthadh an uisge a stad no a stiùireadh. Bha seo na phàirt den mhuillean.</p>",
    /*Hint1: formatted HTML, picture, ... */         0,
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/sluice.webp"
);

const p2q7 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Lad agus caraidh", 
    /*lat of point*/                                55.878889,
    /*lon of point */                               -4.284722,
    /*Information about point (HTML) */             "<p>Lad a bhiodh a’ toirt uisge dhan mhuileann.</p>",
    /*Hint1: formatted HTML, picture, ... */         0,
    /*Hint2: formatted HTML, picture, ... */         0,
    /*Hint3: formatted HTML, picture, ... */         0,
    /*Picture link*/                                "media/scavenger2/lade_weir.webp"
);

const p2q8 = new Picture (
    /*where: name of place / hint 1 (short!)*/      "Drochaid Bhictorianach", 
    /*lat of point*/                                55.879722,
    /*lon of point */                               -4.288056,
    /*Information about point (HTML) */             "<p>Drochaid-choise bho dheireadh an 19mh linn, a chaidh a thogail gus am biodh an Gàrradh Lùsan nas fhasa a ruigsinn bho Kelvinside.</p>",
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
    /*Information about point (HTML) */             "<p>Abair sgeulachd! Tha e do-chreidsinneach gun do tachair an leithid, nach eil? Gu dearbh, chan eil a’ phlaig seo ann ach airson fealla-dhà! Nuair a nochd i, cha robh fios fiù ‘s aig Comhairle Baile Ghlaschu carson a bha i ann...</p><div class='card bg-info'><div class='card-body'>\
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
    <p>An-diugh, ’s e àite breagha agus gu math sàmhach a th’ ann an abhainn Cheilbhinn, le slighe mòr-chòrdte airson coiseachd, ruith is rothaireachd feadh na h-aibhne. O chionn dìreach dà cheud bliadhna, ge-tà, bha coltas gu math eadar-dhealaichte air an sgìre seo. Gàrraidhean agus slìghean sàmhach, obair cruaidh gnìomhachais, ailtireachd spaideil agus am bàile a’ leudachadh far an robh achaidhean ann… abair cruth-tìr iomsgarach, a’ sìor-atharrachadh tro eachdraidh còmhla ri beatha daoine na sgìre.</p>\
    <p>Ghabhaibh cuairt còmhla rinn gus faighinn a-mach mu chuid de na bhiodh a’ dol air bruachan Cheilbhinn. Bidh sibh a’ lorg an àite far an deach gach dealbh a thogail, le beagan cuideachaidh bho àm gu àm…</p>\
    <p>Ged nach eil slighe stèidhichte ann, faodaidh sibh tòiseachadh air a’ gheama aig prìomh gheata nam Botanics. Faodaidh sibh tòiseachadh air agus crìoch a chur air aig àm sam bith, gun a bhith a’ dèanamh an geama air fad san aon latha. Bidh an t-adhartas agaibh air a shabhaladh.<br />\
    Ma tha sibh deiseil is deònach, brùthaibh an seo airson cluich!</p>",
    new Array(p2q1,p2q2,p2q3,p2q4,p2q5,p2q6,p2q7,p2q8,p2q9,p2q10)
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
