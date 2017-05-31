var menuState = function(game){
    this.game = game;
    this.titleBg;
};

    menuState.prototype = {
        
        create: function(){
        titleBg = game.add.sprite(0,0,'Mground');

        playbtn = game.add.button(game.width-560,game.height-380,"playbtn",this.handlePlay);
        playbtn.input.useHandCursor = true;
        playbtn.scale.x = 1.7;
        playbtn.scale.y = 1.7;

        helpbtn = game.add.button(game.width-560,game.height-295,"helpbtn",this.handlehelp);
        helpbtn.input.useHandCursor = true;
        helpbtn.scale.x = 1.7;
        helpbtn.scale.y = 1.7;

        aboutbtn = game.add.button(game.width-560,game.height-210,"aboutbtn",this.handleabout);
        aboutbtn.input.useHandCursor = true;
        aboutbtn.scale.x = 1.7;
        aboutbtn.scale.y = 1.7;
        },

        update: function(){

        },

        handlePlay: function(){
          game.state.start("level1"); 
        },
        handlehelp: function(){
        game.state.start("help");           
    },
        handleabout: function(){
            game.state.start("about");
        },
        handlequit: function(){
           
        }
}