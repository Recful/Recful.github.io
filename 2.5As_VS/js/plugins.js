// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.02 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[192]Available (%1)\",\"Completed Text\":\"\\\\i[191]Completed (%1)\",\"Failed Text\":\"\\\\i[194]Failed (%1)\",\"All Text\":\"\\\\i[189]All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the various\\\\nquests given to you by people from all\\\\nover the world.\\\"\",\"Quest Data Format\":\"\\\"<WordWrap>\\\\\\\\{%1\\\\\\\\}\\\\n<br>\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n<br>\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n<br>\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n<br>\\\\n<br>\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n<br>%5\\\\n<br>\\\\n<br>\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n<br>%6\\\\n<br>\\\\n<br>\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n<br>%7\\\\n<br>\\\\n<br>%8\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\\\\i[162]%1\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]Talk to Song's Brother Yi\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Messenger\",\"Location\":\"Temple\",\"Description\":\"[\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\"\\\",\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\\n\\\\\\\\nYou can insert multiple description entries in case you\\\\\\\\never want to update the quest description midway while the\\\\\\\\nquest is in progress.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]First\\\\\\\\\\\\\\\\c[0] objective to be cleared.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Second\\\\\\\\\\\\\\\\c[0] objective, but it's hidden.\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[176]Potion x5\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[178]Ether x3\\\\\\\"\\\",\\\"\\\\\\\"To make other rewards appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nRewards'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"","Quest 3":"","Quest 4":"","Quest 5":"","Quest 6":"","Quest 7":"","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\r\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"2","All Restrict":"0","Player Allow":"5 6 7 8 9 10 11 12 13 14 15 16","Event Allow":"0","All Allow":"1"}},
{"name":"TDDP_BindPicturesToMap","status":true,"description":"1.0.7 Plugin Commands for binding pictures to the map and/or changing what layer they're drawn on.","parameters":{}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.04 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","Button Events List":"[]","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"DMY_SkipVideo","status":true,"description":"Skip video on key press","parameters":{"Disabler switch":"0"}},
{"name":"YEP_EventClickTrigger","status":true,"description":"v1.00 Lets the player click on designated notetagged events to\ntrigger them from afar!","parameters":{}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.03 Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"---Regions 1 to 20---":"","Region 1":"2","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"5","Region 6":"6","Region 7":"7","Region 8":"8","Region 9":"9","Region 10":"10","Region 11":"11","Region 12":"12","Region 13":"13","Region 14":"14","Region 15":"15","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","---Regions 21 to 40---":"","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","---Regions 41 to 60---":"","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","---Regions 61 to 80---":"","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","---Regions 81 to 100---":"","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","---Regions 101 to 120---":"","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","---Regions 121 to 140---":"","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","---Regions 141 to 160---":"","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","---Regions 161 to 180---":"","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","---Regions 181 to 200---":"","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","---Regions 201 to 220---":"","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","---Regions 221 to 240---":"","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","---Regions 241 to 255---":"","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}}
];