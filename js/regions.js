'use strict';

const region_list = [
[null,  506,  594,
[  506,  594,null,"Royaume des Warnes","Warinian Kingdom","格皮德王國","Warnes","Warinians","格皮德",7400,1250,0],
["Roi","King","Król"],
[  506,  520,null,"Billung ?","Billung ?","Billung ?"],
[  520,  534,null,"Hagena ?","Hagena ?","Hagena ?"],
[  534,  555,null,"Hermegisclus","Hermegisclus","Hermegisclus"],
[  555,  594,null,"Radigis","Radigis","Radigis"],
],
[null,  476,  594,
[  476,  594,null,"Royaume de Bavière","Kingdom of Bavaria","格皮德王國","Bavarois","Bavarians","格皮德",7370,1350,1.5],
["Roi","King","Król"],
[  476,  482,"agiulf","アルダリック","Agilulf ?","$"],
[  482,  513,"theodo","$","Theodo I","$"],
[  513,  549,null,"$","Theodo II","$"],
[  549,  591,null,"エレムンド","Garibald","$"],
],
[null,  454,  532,
[  434,  506,null,"Royaume de Thuringe","Kingdom of Thuringia","格皮德王國","Thuringiens","Thuringians","格皮德",7330,1220,0],
[  506,  532,null,"Royaume de Thuringe","Kingdom of Thuringia","格皮德王國","Thuringiens","Thuringians","格皮德",7330,1220,1],
["Roi","King","Król"],
[  434,  454,null,"アルダリック","Merwig I?","$"],
[  454,  481,null,"アルダリック","Basin I","$"],
[  481,  506,null,"$","Basin II","$"],
[  506,  534,null,"$","Hermanfried","$"],
],
[null,  845,  1450,
[  845,  888,null,"Principauté de Prague","Principality of Prague","Księstwo Pragi","Tchèques","Czechs","Czechy",7470,1270,1],
["Prince","Prince","książę"],
[  845,  872,null,"Svatoslav","Svatoslav","Światosław"],
[  872,  883,null,"Borivoj I","Borivoj I","Borzywoj I"],
[  883,  885,null,"Strojmir","Strojmir","Strojmir"],
[  885,  888,null,"Borivoj I","Borivoj I","Borzywoj I"],
],
[null,  454,  567,
[  454,  567,null,"Royaume des Gépides","Kingdom of the Gepid","Królestwo Gepidów","Gépides","Gepids","Gepidowie",7800,1400,0],
["Roi","King","Król"],
[  451,  460,null,"Svatoslav","Ardaric","Ardaryk"],
[  460,  482,null,"Borivoj I","Giesmus","Giesmus"],
[  482,  488,null,"Strojmir","Thraustila","Strojmir"],
[  488,  504,null,"Borivoj I","Thrasaric","Thrasaryk "],
[  504,  520,null,"Gunderith","Gunderic","Gunderit"],
[  520,  552,null,"Borivoj I","Elemund","Elemund"],
[  552,  562,null,"Borivoj I","Thurisind","Thorisin"],
[  562,  567,null,"Borivoj I","Cunimund","Kunimund"],
],
[null,  454,  700,
[  454,  481,null,"Royaume des Lombards","Kingdom of the Lombards","Królestwo Gepidów","Lombards","Lombards","Gepidowie",7450,1300,0],
[  481,  487,null,"Royaume des Lombards","Kingdom of the Lombards","Królestwo Gepidów","Lombards","Lombards","Gepidowie",7520,1320,0],
[  487,  509,null,"Royaume des Lombards","Kingdom of the Lombards","Królestwo Gepidów","Lombards","Lombards","Gepidowie",7540,1320,0],
[  509,  541,null,"Royaume des Lombards","Kingdom of the Lombards","Królestwo Gepidów","Lombards","Lombards","Gepidowie",7580,1320,0],
["Roi","King","Król"],
[  454,  460,null,"Svatoslav","Aldihoc","Ardaryk"],
[  460,  480,null,"Svatoslav","Godehoc","Ardaryk"],
[  480,  500,null,"Svatoslav","Claffo","Ardaryk"],
[  500,  510,null,"Svatoslav","Tato","Ardaryk"],
[  510,  539,null,"Svatoslav","Wacho","Ardaryk"],
],
[null,  525, 963,
[  525, 805,null,"Royaume des Serbes Blancs","Kingdom of Sorbia","Królestwo Sorbów","Sorabes","Sorbs","Surbiów",7450,1220,0],
["Roi","King","Król"],
[ 560, 590,null,"Zuiesdodrago","Zvezdodrag","Zwezdodrogi"],
[ 590, 615,null,"Beloslas","Beloslav","Boleslaw"],
[ 615, 636,null,"Dervan","Dervan","Derwan"],
[ 636, 640,null,"Fils inconnue de Dervan","Dervan's unknown son","Derwan"],
],
[null,  454, 568,
[  454, 568,null,"Royaume Ostrogothique","Kingdom of Ostrogothia","Królestwo Sorbów","Ostrogoths","Ostrogoths","Surbiów",7600,1420,0],
["Roi","King","Król"],
[ 454, 465,null,"Valamire","Valamir","Walamir"],
[ 465, 475,null,"Thiudimer","Theodomir","Tiudimer"],
[ 475, 526,null,"Théodoric","Theodoric","Dyktryk"],
[ 526, 534,null,"Athalaric","Athalaric","Atalaryk"],
],
[null,  453, 509,
[  454, 509,null,"Royaume des Heruliens","Kingdom of the Heruli","Królestwo Sorbów","Heruliens","Heruli","Surbiów",7570,1340,1],
["Roi","King","Król"],
[ 480, 509,null,"Rodolphe","Rodolf","Rudolf"],
],
[null,  453, 469,
[  454, 469,null,"Royaume des Quadi","Kingdom of the Quadis","Królestwo Sorbów","Quadi","Quadis","Surbiów",7600,1370,1],
],
[null,  457, 487,
[  457, 476,null,"Royaume des Rugiens","Kingdom of the Rugiis","Królestwo Sorbów","Rugii","Rugii","Surbiów",7500,1340,1],
[  476, 487,null,"Royaume des Rugiens","Kingdom of the Rugiis","Królestwo Sorbów","Rugii","Rugii","Surbiów",7500,1380,1],
],
];