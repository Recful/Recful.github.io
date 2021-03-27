// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.02 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[192]Available (%1)\",\"Completed Text\":\"\\\\i[191]Completed (%1)\",\"Failed Text\":\"\\\\i[194]Failed (%1)\",\"All Text\":\"\\\\i[189]All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the various\\\\nquests given to you by people from all\\\\nover the world.\\\"\",\"Quest Data Format\":\"\\\"<WordWrap>\\\\\\\\{%1\\\\\\\\}\\\\n<br>\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n<br>\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n<br>\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n<br>\\\\n<br>\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n<br>%5\\\\n<br>\\\\n<br>\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n<br>%6\\\\n<br>\\\\n<br>\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n<br>%7\\\\n<br>\\\\n<br>%8\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\\\\i[162]%1\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]Talk to Song's Brother Yi\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Messenger\",\"Location\":\"Temple\",\"Description\":\"[\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\"\\\",\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\\n\\\\\\\\nYou can insert multiple description entries in case you\\\\\\\\never want to update the quest description midway while the\\\\\\\\nquest is in progress.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]First\\\\\\\\\\\\\\\\c[0] objective to be cleared.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Second\\\\\\\\\\\\\\\\c[0] objective, but it's hidden.\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[176]Potion x5\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[178]Ether x3\\\\\\\"\\\",\\\"\\\\\\\"To make other rewards appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nRewards'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"","Quest 3":"","Quest 4":"","Quest 5":"","Quest 6":"","Quest 7":"","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\r\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"2","All Restrict":"0","Player Allow":"2 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19","Event Allow":"0","All Allow":"1"}},
{"name":"TDDP_BindPicturesToMap","status":true,"description":"1.0.7 Plugin Commands for binding pictures to the map and/or changing what layer they're drawn on.","parameters":{}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.04 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","Button Events List":"[]","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"DMY_SkipVideo","status":true,"description":"Skip video on key press","parameters":{"Disabler switch":"0"}},
{"name":"YEP_EventClickTrigger","status":true,"description":"v1.00 Lets the player click on designated notetagged events to\ntrigger them from afar!","parameters":{}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.03 Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"---Regions 1 to 20---":"","Region 1":"2","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"5","Region 6":"6","Region 7":"7","Region 8":"8","Region 9":"9","Region 10":"10","Region 11":"11","Region 12":"12","Region 13":"13","Region 14":"14","Region 15":"15","Region 16":"16","Region 17":"17","Region 18":"18","Region 19":"19","Region 20":"0","---Regions 21 to 40---":"","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","---Regions 41 to 60---":"","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","---Regions 61 to 80---":"","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","---Regions 81 to 100---":"","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","---Regions 101 to 120---":"","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","---Regions 121 to 140---":"","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","---Regions 141 to 160---":"","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","---Regions 161 to 180---":"","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","---Regions 181 to 200---":"","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","---Regions 201 to 220---":"","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","---Regions 221 to 240---":"","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","---Regions 241 to 255---":"","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"MOG_TitleParticles","status":true,"description":"(v2.1 *) Adiciona partículas na tela de título.","parameters":{"-> Particles 1 <<<<<<<<<<<<<<<<<<<<<<<":"","P1 Visible":"true","P1 File Name":"Particles","P1 Amount":"10","P1 Z Index":"20","P1 X Speed":"1","P1 Y Speed":"1","P1 Rotation Speed":"0.02","P1 Blend Mode":"0","P1 Anchor":"0","P1 Leaf Mode":"false","P1 Transition Time":"0","":"","-> Particles 2 <<<<<<<<<<<<<<<<<<<<<<<":"","P2 Visible":"true","P2 File Name":"Particles2","P2 Amount":"5","P2 Z Index":"0","P2 X Speed":"2","P2 Y Speed":"2","P2 Rotation Speed":"0.01","P2 Blend Mode":"0","P2 Anchor":"0","P2 Leaf Mode":"false","P2 Transition Time":"0","-> Particles 3 <<<<<<<<<<<<<<<<<<<<<<<":"","P3 Visible":"true","P3 File Name":"Particles3","P3 Amount":"5","P3 Z Index":"22","P3 X Speed":"0.5","P3 Y Speed":"0.5","P3 Rotation Speed":"0.006","P3 Blend Mode":"0","P3 Anchor":"0","P3 Leaf Mode":"true","P3 Transition Time":"0","-> Particles 4 <<<<<<<<<<<<<<<<<<<<<<<":"","P4 Visible":"true","P4 File Name":"Particles4","P4 Amount":"2","P4 Z Index":"23","P4 X Speed":"0.6","P4 Y Speed":"0.5","P4 Rotation Speed":"0","P4 Blend Mode":"0","P4 Anchor":"0","P4 Leaf Mode":"true","P4 Transition Time":"0","-> Particles 5 <<<<<<<<<<<<<<<<<<<<<<<":"","P5 Visible":"false","P5 File Name":"Particles5","P5 Amount":"25","P5 Z Index":"24","P5 X Speed":"4","P5 Y Speed":"0","P5 Rotation Speed":"0","P5 Blend Mode":"1","P5 Anchor":"0","P5 Leaf Mode":"false","P5 Transition Time":"0","-> Particles 6 <<<<<<<<<<<<<<<<<<<<<<<":"","P6 Visible":"false","P6 File Name":"Particles6","P6 Amount":"25","P6 Z Index":"25","P6 X Speed":"4","P6 Y Speed":"0","P6 Rotation Speed":"0","P6 Blend Mode":"1","P6 Anchor":"0","P6 Leaf Mode":"false","P6 Transition Time":"0"}},
{"name":"MOG_TitlePictureCom","status":true,"description":"(v1.6 *) Adiciona comandos em imagens no lugar da janela.","parameters":{"-> Main <<<<<<<<<<<<<<<<<<<<<<<":"","Animation Mode":"2","Left & Right Input":"true","Com Fade-In Duration":"13","Slide X-Axis":"-100","Slide Y-Axis":"0","":"","-> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<":"","Smart Background":"false","Background X-Axis":"0","Background Y-Axis":"0","Background Fade-In Duration":"90","-> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<":"","Title Sprite":"false","Title Sprite X-Axis":"300","Title Sprite Y-Axis":"150","Fade-In Duration":"40","Zoom Effect":"true","Zoom Speed":"40","-> Cursor <<<<<<<<<<<<<<<<<<<<<<<":"","Cursor X-Axis":"0","Cursor Y-Axis":"5","Cursor Visible":"true","Cursor Wave Animation":"true","Cursor Rotation Animation":"false","Cursor Rotation Speed":"0.05","-> Commands <<<<<<<<<<<<<<<<<<<<<<<":"","Command Pos 1":"650,460","Command Pos 2":"660,490","Command Pos 3":"665,520","Command Pos 4":"670,550","Command Pos 5":"345,498","Command Pos 6":"345,530","Command Pos 7":"0,192","Command Pos 8":"0,224","Command Pos 9":"0,256","Command Pos 10":"0,288"}},
{"name":"MOG_MenuCursor","status":true,"description":"(v1.6) Adiciona um cursor animado no menu.","parameters":{"Slide Animation":"true","Cursor X-axis":"0","Cursor Y-axis":"0","Frames Animation":"false","Max Frames":"4","Animation Speed":"7"}},
{"name":"MOG_MenuBackground","status":true,"description":"(v1.2) O plugin permite mudar a imagem de fundo do menu.","parameters":{"Disable Scenes":"Scene_Test1,Scene_Test2,Scene_Test3","Default FileName":"Pic_1","Unique Backgrounds":"false","Sufix FileName":"_back","Window Opacity":"30","Scroll X-Axis":"0","Scroll Y-Axis":"0"}},
{"name":"MOG_SceneMenu","status":true,"description":"(v1.2) Modifica a cena de menu principal.","parameters":{"Actor Hud X-Axis":"-10","Actor Hud Y-Axis":"100","Char X-Axis":"10","Char Y-Axis":"0","HP Meter X-Axis":"17","HP Meter Y-Axis":"93","MP Meter X-Axis":"17","MP Meter Y-Axis":"144","HP Number X-Axis":"100","HP Number Y-Axis":"73","HPMax Number X-Axis":"140","HPMax Number Y-Axis":"100","MP Number X-Axis":"100","MP Number Y-Axis":"124","MPMax Number X-Axis":"140","MPMax Number Y-Axis":"151","Commands X-Axis":"180","Commands Y-Axis":"50","Command Active X-Axis":"40","Command Active Y-Axis":"148","Com Name Visible":"true","Com Name X-Axis":"40","Com Name Y-Axis":"96","Com Name FontSize":"22","Max Visible Faces":"5","Face Sel X-Axis":"240","Face Sel Y-Axis":"128","Gold X-Axis":"0","Gold Y-Axis":"0","Time X-Axis":"565","Time Y-Axis":"60","Time FontSize":"22","Location X-Axis":"450","Location Y-Axis":"575","Magic Circle Visible":"fasle","Magic Circle X-Axis":"700","Magic Circle Y-Axis":"140","Magic Circle Rotation":"0.001"}},
{"name":"MOG_MenuParticles","status":true,"description":"(v1.1) Adiciona partículas nas cenas menu.","parameters":{"Number of Particles":"10","Disable Scenes":"Scene_Test1,Scene_Test2,Scene_Test3","Unique Particles":"true","X-Axis Speed":"1","Y-Axis Speed":"1","Rotation Speed":"2","Blend Mode":"0"}},
{"name":"8-dir move","status":true,"description":"8-dir move","parameters":{}},
{"name":"ResolutionChanger","status":false,"description":"Changing game resolution easily.","parameters":{"Width":"1280","Height":"720"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1024","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"GALV_MessageBackground","status":true,"description":"(v.2.0) Displays an image behind messages in place of the windowskin","parameters":{"Image Variable ID":"1","Disable Switch ID":"1"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.8) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"1","Bust Position":"1","Text X Offset":"270","Fade Out Speed":"32","Filename Append":""}},
{"name":"Galv_ShadowDarken","status":false,"description":"(v.1.0) Map characters darken when in shadow regions","parameters":{"Dark Amount":"130","Shadow Regions":"237,238"}},
{"name":"YEP_BattleEngineCore","status":false,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"MOG_BattleHud","status":true,"description":"(v5.04 *) Permite customizar o layout de batalha.","parameters":{"-> MAIN <<<<<<<<<<<<<<<<<<<<<<<":"","Hud X-Axis":"0","Hud Y-Axis":"200","Hud Space X":"0","Hud Space Y":"0","Hud Slide X":"0","Hud Slide Y":"0","Vertical Mode":"true","Max Battle Members":"2","":"","-> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<":"","Layout2 Visible":"false","Layout2 X-Axis":"0","Layout2 Y-Axis":"0","-> TURN <<<<<<<<<<<<<<<<<<<<<<<":"","Turn Visible":"true","Turn X-Axis":"0","Turn Y-Axis":"0","Turn Rotation Speed":"0","Turn Zoom Animation":"false","-> FACE <<<<<<<<<<<<<<<<<<<<<<<":"","Face Visible":"true","Face X-Axis":"54","Face Y-Axis":"16","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"false","Face Priority":"1","-> NAME <<<<<<<<<<<<<<<<<<<<<<<":"","Name Visible":"true","Name X-Axis":"70","Name Y-Axis":"-7","Name Align":"0","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false","-> HP <<<<<<<<<<<<<<<<<<<<<<<":"","HP Meter Visible":"true","HP Meter X-Axis":"164","HP Meter Y-Axis":"21","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"265","HP Number Y-Axis":"0","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","-> MP <<<<<<<<<<<<<<<<<<<<<<<":"","MP Meter Visible":"true","MP Meter X-Axis":"297","MP Meter Y-Axis":"21","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"397","MP Number Y-Axis":"0","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","-> TP <<<<<<<<<<<<<<<<<<<<<<<":"","TP Meter Visible":"true","TP Meter X-Axis":"420","TP Meter Y-Axis":"21","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align type":"0","TP Number X-Axis":"520","TP Number Y-Axis":"0","MaxTP Number Visible":"false","MaxTP Number X-Axis":"175","MaxTP Number Y-Axis":"99","-> ATB <<<<<<<<<<<<<<<<<<<<<<<":"","ATB Meter Visible":"true","ATB Meter X-Axis":"0","ATB Meter Y-Axis":"32","ATB Meter Angle":"0","ATB Meter Flow Anime":"false","-> STATES <<<<<<<<<<<<<<<<<<<<<<<":"","States Visible":"true","States X-Axis":"532","States Y-Axis":"0","States Mode":"0","States Max":"4","States Align":"0","-> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<":"","Command Auto Adjust":"1","W Command X-Axis":"15","W Command Y-Axis":"440","W Command Width":"192","W Command Height":"180","W Command Slide X":"0","W Command Slide Y":"0","Layout Command":"true","L Command X-Axis":"-25","L Command Y-Axis":"-35","-> W PARTY <<<<<<<<<<<<<<<<<<<<<<<":"","W Party X-Axis":"325","W Party Y-Axis":"400","W Party Width":"192","W Party Height":"110","W Party Slide X":"0","W Party Slide Y":"0","Layout Party":"true","L Party X-Axis":"-325","L Party Y-Axis":"-42","-> W HELP <<<<<<<<<<<<<<<<<<<<<<<":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","W Help Slide X":"0","W Help Slide Y":"0","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0","-> W SKILL <<<<<<<<<<<<<<<<<<<<<<<":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","W Skill Slide X":"0","W Skill Slide Y":"0","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67","-> W ITEM <<<<<<<<<<<<<<<<<<<<<<<":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","W Item Slide X":"0","W Item Slide Y":"0","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67","-> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","W Actor Slide X":"0","W Actor Slide Y":"0","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67","-> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","W Enemy Slide X":"0","W Enemy Slide Y":"0","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67","-> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0","-> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<":"","Custom Position 1":"350,628","Custom Position 2":"350,671","Custom Position 3":"220,540","Custom Position 4":"220,585","Custom Position 5":"220,630","Custom Position 6":"220,675","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BattleCommands","status":true,"description":"(v1.2) Comandos de batalhas animados por imagens.","parameters":{"Mode":"1","Layout X-axis":"22","Layout Y-axis":"15","Com X-axis":"0","Com Y-axis":"0","Arrow":"false","Arrow X-axis":"5","Arrow Y-axis":"0","Zoom Animation":"true","Zoom Rate":"1.30","Zoom Speed":"0.015","Zoom Loop":"true","Slide Animation":"false","Slide X":"0","Slide Y":"0","Com Name":"true","Com Name X-axis":"55","Com Name Y-axis":"75","Com Font Size":"22","Cursor":"false","Cursor X-axis":"0","Cursor Y-axis":"0","Cursor Slide":"false","Row Max":"4","Ring Range":"70","Ring Motion":"true","Pi Range":"2.0","Side Input":"true","Face":"true","Face X-axis":"0","Face Y-axis":"-45"}},
{"name":"MOG_BossHP","status":true,"description":"(v2.4 *) Apresenta um medidor de HP para os chefes.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"false","Slant Animation":"true","Flow Speed":"4","Name Font Size":"18","Layout X-Axis":"150","Layout Y-Axis":"10","Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32","Number Percentage":"false","Show States":"true","States Max":"8","States X-axis":"50","States Y-axis":"-8"}},
{"name":"MOG_DmgPopupEffects","status":true,"description":"(v1.0) Adiciona alguns efeitos nos sprites do dano.","parameters":{"Duration":"90","PopUp Type":"0","Zoom Effect":"true","Center Y-Axis":"true"}},
{"name":"MOG_BattleCursor","status":true,"description":"(v2.3 *) Adiciona flechas de indicação nos alvos selecionados.","parameters":{"X-Axis":"0","Y-Axis":"0","Name Visible":"true","Name X-Axis":"0","Name Y-Axis":"0","Font Size":"18","Float Effect":"true","Sort X-Axis":"true","Window Visible":"false","Touch Selection":"true","Help All Allies":"All Allies","Help All Enemies":"All Enemies"}},
{"name":"MOG_ComboCounter","status":true,"description":"(v1.7 *) Apresenta a quantidade de acertos no alvo.","parameters":{"-> MAIN <<<<<<<<<<<<<<<<<<<<<<<":"","For Party":"true","For Enemies":"true","Damage Cancel Counter":"true","Shake Effect":"false","Zoom Effect Range":"3","":"","-> POSITION <<<<<<<<<<<<<<<<<<<<<<<":"","Party X-Axis":"600","Party Y-Axis":"90","Enemies X-Axis":"0","Enemies Y-Axis":"90","----------------------------------------":"","C HIT Layout X-Axis":"118","C HIT Layout Y-Axis":"34","C DMG Layout X-Axis":"10","C DMG Layout Y-Axis":"0","C HIT Number X-Axis":"115","C HIT Number Y-Axis":"45","C DMG Number X-Axis":"150","C DMG Number Y-Axis":"3"}},
{"name":"MOG_BattlerMotion","status":true,"description":"(v2.1 *) Adiciona efeitos animados nos battlers.","parameters":{"Default Damage Motion":"3","Damage Motion Actor":"true","Damage Motion Enemy":"true","Disable Blink Damage":"true","Actor Action Motion":"true","Enemy Action Motion":"true","Shadow (Float Motion)":"true","Shadow Opacity":"170","Shadow Zoom Effect":"true","Battleback Ground Height":"200"}}
];
