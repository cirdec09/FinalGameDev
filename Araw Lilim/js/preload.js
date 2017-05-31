var loadState = function(game){

};

  loadState.prototype = {
      
      preload: function(){
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.forceToPortrait = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.refresh();
        
        game.load.image("border1","img/borderV1.png");
        game.load.image("border2","img/borderH1.png");
        game.load.image("border3","img/borderV2.png");
        game.load.image("border4","img/borderH2.png");

        game.load.image("bground","img/BackgroundGradient1.png");
        game.load.image("Mground","img/menuBG.png");
         //players
        game.load.spritesheet("player","img/player.png",23.5,38.5);
        game.load.spritesheet("enemy1","img/baddie.png",23.5,38.5);
        game.load.spritesheet("enemys","img/baddies.png",23.5,38.5);
        game.load.spritesheet("enemyss","img/baddiess.png",23.5,38.5);
        game.load.spritesheet("enemysss","img/baddiesss.png",23.5,38.5);
        game.load.spritesheet("enemyssss","img/baddiessss.png",23.5,38.5);
        //buttons
        game.load.image("kaliwa","img/left.png");
        game.load.image("up","img/up.png");
        game.load.image("kanan","img/right.png");
        game.load.image("down","img/down.png");

        game.load.image("playbtn","img/play.png");
        game.load.image("helpbtn","img/help.png");
        game.load.image("aboutbtn","img/about.png");
        game.load.image("quitbtn","img/quit.png");
        game.load.image("closebtn","img/close.png")
        game.load.image("pause","img/pause.png");
        game.load.image("playG","img/playagain.png");
        game.load.image("menu","img/menu.png");

        game.load.image("lilim1","img/shadows.png");
        game.load.image("lilim2","img/shadowss.png");
        game.load.image("lilim3","img/shadowsss.png");

        game.load.image("tree","img/tree1.png")
        game.load.image("trees","img/tree2.png")
        game.load.image("treess","img/tree3.png")

        game.load.audio("kansyon","sounds/kansyon.mp3");
        game.load.audio("natay","sounds/natay.mp3");

      },
      
      create: function(){
        this.state.start('menu');
  }
}