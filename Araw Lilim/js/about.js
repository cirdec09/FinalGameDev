var aboutState = function(game){
    this.game = game;
};

    aboutState.prototype = {
        
        create: function(){
            game.stage.backgroundColor = "#373F6C";
            about = game.add.text(150,90,"Final Project in Game Development",{fill:'yellow',font:'40px Arial'});
            about.fontWeight = 'bold';
            about.stroke = 'black'
            about.strokeThickness = 7;
            by = game.add.text(360,250,"BY",{fill:'yellow',font:'40px Arial'});
            by.fontWeight = 'bold';
            by.stroke = 'black'
            by.strokeThickness = 7;

            al = game.add.text(100,350,"Almera Dumlao",{fill:'yellow',font:'35px Arial'});
            al.fontWeight = 'bold';
            al.stroke = 'black'
            al.strokeThickness = 7;

            ced = game.add.text(100,420,"Cedric Almandres",{fill:'yellow',font:'35px Arial'});
            ced.fontWeight = 'bold';
            ced.stroke = 'black'
            ced.strokeThickness = 7;

            game.add.button(720,20,"closebtn",this.backM);

        },

        update: function(){

        },
        backM: function(){
            game.state.start("menu")
        }
}