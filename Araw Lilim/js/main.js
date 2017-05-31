window.onload = function(){
var w = 800, h = 600, bounds = 5000,boundsRight = 12000;;
var player, bg, enemy1, border1, border2 ,border3,border4;
var lilim1;
var stat, kaliwa, up, kanan, timeText, gameOverText, level1;
var helpbtn, quitbtn, aboutbtn;
 game = new Phaser.Game(800,600,Phaser.CANVAS,'');

				
	//Add all states
    game.state.add("preload", loadState);
    game.state.add("menu", menuState);
    game.state.add("help", helpState);
    game.state.add("about", aboutState);
    game.state.add("level1", level1State);
        //Start the first state
    game.state.start("preload");
}