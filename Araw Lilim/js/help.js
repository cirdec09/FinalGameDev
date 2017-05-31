var helpState = function(game){
this.game = game;
};


    helpState.prototype = {
        
        create: function(){
            game.stage.backgroundColor = "#373F6C";
            help = game.add.text(340,45,"Help",{fill:'yellow',font:'55px Arial'});
            help.fontWeight = 'bold';
            help.stroke = 'black'
            help.strokeThickness = 7;
            game.add.text(100,250,"Iwasan ang mga kulay asul na kalaban...",{fill:'yellow',font:'30px Arial'});
            game.add.text(100,290,"Gamitin ng maayos ang mga lilim...",{fill:'yellow',font:'30px Arial'});
            game.add.text(100,330,"Manatiling hindi nahuhuli sa loob ng 30 segundo...",{fill:'yellow',font:'30px Arial'});

            game.add.button(720,20,"closebtn",this.backM);

        },
        
        update: function(){
            
        },
        backM: function(){
            game.state.start("menu");
        }
        
    }