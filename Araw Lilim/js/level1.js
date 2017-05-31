// Main game control script

var level1State = function(game){
  this.game = game;
  duration =30, LT = 2;
  left = false, right = false, up = false, down = false;
};

    level1State.prototype = {

        create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //BackgroundImage
        bg = game.add.sprite(0,0,"bground");

        kansyon = game.add.audio("kansyon");
        kansyon.play();
        this.loopAudio(12000);

        natay = game.add.audio("natay");

        //border1
        border1 = game.add.sprite(0,0,"border1");
        game.physics.arcade.enable(border1);
        border1.body.immovable = true;
        //border2
        border2 = game.add.sprite(10,0,"border2");
        game.physics.arcade.enable(border2);
        border2.body.immovable = true;
        //border3
        border3 = game.add.sprite(790,0,"border3");
        game.physics.arcade.enable(border3);
        border3.body.immovable = true;
        //border4
        border4 = game.add.sprite(0,590,"border4");
        game.physics.arcade.enable(border4);
        border4.body.immovable = true;
        //Shadow
        shadow = game.add.sprite(460,300,"lilim1");
        game.physics.arcade.enable(shadow);
        shadow.body.immovable = true;

        shadows = game.add.sprite(140,470,"lilim2");
        game.physics.arcade.enable(shadows);
        shadows.body.immovable = true;

        shadowss = game.add.sprite(240,80,"lilim3");
        game.physics.arcade.enable(shadowss);
        shadowss.body.immovable = true;

        //pause
        pausebtn = game.add.button(380,15,"pause",this.handlepause);
        pausebtn.input.useHandCursor = true;
        //Player
       player = game.add.sprite(700,500,"player");
        // player = game.add.sprite(700,100,"player");
        // player = game.add.sprite(100,(h/2)+50,"player");
     
        player.animations.add('right',[12,13,14,15],7,true);
        player.animations.add('left',[4,5,6,7],7,true);
        player.animations.add('down',[0,1,2,3],7,true);
        player.animations.add('up',[8,9,10,11],7,true);

        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.scale.x = 2;
        player.scale.y = 2;

        //tree
        tree = game.add.sprite(230,440,"tree");
        game.physics.arcade.enable(tree);
        tree.body.collideWorldBounds = true;
        tree.body.immovable = true;
        tree.scale.x = 2;
        tree.scale.y = 2;

        trees = game.add.sprite(330,50,"trees");
        game.physics.arcade.enable(trees);
        trees.body.collideWorldBounds = true;
        trees.body.immovable = true;
        trees.scale.x = 2;
        trees.scale.y = 2;

        treess = game.add.sprite(550,275,"treess");
        game.physics.arcade.enable(treess);
        treess.body.collideWorldBounds = true;
        treess.body.immovable = true;
        treess.scale.x = 2;
        treess.scale.y = 2;

        //Ai
        //enemy1 = game.add.sprite(game.width/2,game.height/2,"enemy1");
        enemy1 = game.add.sprite(15,15,"enemy1");
        game.physics.arcade.enable(enemy1);
        enemy1.body.collideWorldBounds = true;
        enemy1.animations.add("move",[4,5,6,7,12,13,14,15],6,true);
        enemy1.animations.play("move");
        enemy1.body.velocity.setTo(-205, 205);
        enemy1.body.bounce.set(1);
        enemy1.scale.x = 2;
        enemy1.scale.y = 2;

        enemys = game.add.sprite(750,15,"enemys");
        game.physics.arcade.enable(enemys);
        enemys.body.collideWorldBounds = true;
        enemys.animations.add("move",[4,5,6,7,12,13,14,15],6,true);
        enemys.animations.play("move");
        enemys.body.velocity.setTo(-205, 205);
        enemys.body.bounce.set(1);
        enemys.scale.x = 2;
        enemys.scale.y = 2;

        enemyss = game.add.sprite(15,300,"enemyss");
        game.physics.arcade.enable(enemyss);
        enemyss.body.collideWorldBounds = true;
        enemyss.animations.add("move",[4,5,6,7,12,13,14,15],6,true);
        enemyss.animations.play("move");
        enemyss.body.velocity.setTo(-205, 205);
        enemyss.body.bounce.set(1);
        enemyss.scale.x = 2;
        enemyss.scale.y = 2;

        enemysss = game.add.sprite(400,300,"enemysss");
        game.physics.arcade.enable(enemysss);
        enemysss.body.collideWorldBounds = true;
        enemysss.animations.add("move",[4,5,6,7,12,13,14,15],6,true);
        enemysss.animations.play("move");
        enemysss.body.velocity.setTo(-205, 205);
        enemysss.body.bounce.set(1);
        enemysss.scale.x = 2;
        enemysss.scale.y = 2;

        // //kaliwa
        kaliwa = game.add.button(15,410,"kaliwa",null,this,0,0);
        kaliwa.scale.x = 3.2;
        kaliwa.scale.y = 3.6;
        kaliwa.events.onInputOver.add(function(){left=true;});
        kaliwa.events.onInputOut.add(function(){left=false;});
        kaliwa.events.onInputDown.add(function(){left=true;});
        kaliwa.events.onInputUp.add(function(){left=false;});
        //KananButton
        kanan = game.add.button(170,410,'kanan',null,this,0,0);
        kanan.scale.x = 3.2;
        kanan.scale.y = 3.6;
        kanan.events.onInputOver.add(function(){right=true;});
        kanan.events.onInputOut.add(function(){right=false;});
        kanan.events.onInputDown.add(function(){right=true;});
        kanan.events.onInputUp.add(function(){right=false;});
        //pataas
        up = game.add.button(117,470,'up',null,this,0,1,0,1);
        up.scale.x = 3.1;
        up.scale.y = 3.6;
        up.events.onInputOver.add(function(){up=true;});
        up.events.onInputOut.add(function(){up=false;});
        up.events.onInputDown.add(function(){up=true;});
        up.events.onInputUp.add(function(){up=false;});
        //down
        down = game.add.button(117,297,'down',null,this,0,1,0,1);
        down.scale.x = 3.1;
        down.scale.y = 3.6;
        down.events.onInputOver.add(function(){down=true;});
        down.events.onInputOut.add(function(){down=false;});
        down.events.onInputDown.add(function(){down=true;});
        down.events.onInputUp.add(function(){down=false;});

        this.timer(1000,duration);
        
        //Text
        gameOverText = game.add.text(310,240,"Game Over !",{font:'90px Arial',fill:'red'});
        gameOverText.fontWeight = 'bold';
        gameOverText.stroke = 'black'
        gameOverText.strokeThickness = 7;
        gameOverText.visible = false;

        game.add.text(670,22,"TIME:");
        timeLabel = game.add.text(750,17,""+ duration,{font:'80px Arial',fill:'red'});
        timeLabel.fontWeight = 'bold';
        timeLabelTween = game.add.tween(timeLabel.scale).to({ x: 1.5, y: 1.5}, 200, Phaser.Easing.Linear.In).to({ x: 1, y: 1}, 200, Phaser.Easing.Linear.In);
        timeLabelTween.start();

        magaling = game.add.text(320,220,"Magaling !",{fill:'yellow',font:'70px Arial'});
        magaling.fontWeight = 'bold';
        magaling.stroke = 'black'
        magaling.strokeThickness = 7;
        magaling.visible = false;

        stat = game.add.text(25,15,"",{font:"90px Arial",fill:"white"});
        stat.fontWeight = 'bold';
        game.input.onTap.add(this.resumee);

        again = game.add.button(275,340,"playG",this.playAG);
        again.scale.x = 1.3;
        again.scale.y = 1.3;
        again.visible = false;
},
  update: function(){
    keyboard = game.input.keyboard.createCursorKeys();
    //player&&border
    game.physics.arcade.collide(player,border1);
    game.physics.arcade.collide(player,border2);
    game.physics.arcade.collide(player,border3);
    game.physics.arcade.collide(player,border4);

    //enemy&&border
    //1
    game.physics.arcade.collide(border1,enemy1);
    game.physics.arcade.collide(border2,enemy1);
    game.physics.arcade.collide(border3,enemy1);
    game.physics.arcade.collide(border4,enemy1);
    //2
    game.physics.arcade.collide(border1,enemys);
    game.physics.arcade.collide(border2,enemys);
    game.physics.arcade.collide(border3,enemys);
    game.physics.arcade.collide(border4,enemys);
    //3
    game.physics.arcade.collide(border1,enemyss);
    game.physics.arcade.collide(border2,enemyss);
    game.physics.arcade.collide(border3,enemyss);
    game.physics.arcade.collide(border4,enemyss);
    //player&&tree
    game.physics.arcade.collide(player,tree);
    game.physics.arcade.collide(player,trees);
    game.physics.arcade.collide(player,treess);


    //player&&shadow
    game.physics.arcade.overlap(player,shadow);

    // //DesktopControls
    if(keyboard.left.isDown){
            player.animations.play("left");
            player.body.velocity.x = -200;
        }
        else if(keyboard.right.isDown){
            player.animations.play("right");
            player.body.velocity.x = 200;
        }
        else if(keyboard.up.isDown){
            player.animations.play("pataas");
            player.body.velocity.y = -200;
        }
        else if(keyboard.down.isDown){
            player.animations.play("pababa");
            player.body.velocity.y = 200;
        }
        else{
            player.frame = 8;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            player.animations.stop();
        }
    
    //MobileTouch
        // if(left) {
        //       player.body.velocity.x = -200;
        //       player.animations.play("left");
        //     }
        // else if(right){
        //     player.body.velocity.x = 200;
        //     player.animations.play("right");
        // }
        // else if(up){
        //     player.body.velocity.y = 200;
        //     player.animations.play("up");
        // }
        // else if(down){
        //     player.body.velocity.y = -200;
        //     player.animations.play("down");
        // }
        // else{
        //     player.body.velocity.x = 0;
        //     player.body.velocity.y = 0;
        //     player.animations.stop();
        //     player.frame = 8;
        // }

        //Situation1
        if(game.physics.arcade.overlap(player,shadow)){
            this.lilimm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemy1);
        }
        else if(game.physics.arcade.overlap(player,shadows)){
            this.lilimmm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemy1);
        }
         else if(game.physics.arcade.overlap(player,shadowss)){
            this.lilimmmt(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemy1);
        }
        else{
            stat.text = "Araw"
        }
        if(game.physics.arcade.collide(player,enemy1)){
            stat.text = "Tag";
            gameOverText.visible = true;
            again.visible = true;
            magaling.visible = false;
            game._paused = true;
            this.patayin();
            kansyon.stop();
            natay.play();
            }
       //Situation2
        if(game.physics.arcade.overlap(player,shadow)){
            this.lilimm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemys);
        }
        else if(game.physics.arcade.overlap(player,shadows)){
            this.lilimmm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemys);
        }
        else if(game.physics.arcade.overlap(player,shadowss)){
            this.lilimmmt(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemys);
        }
        else{
            stat.text = "Araw"
        }
        if(game.physics.arcade.collide(player,enemys)){
            stat.text = "Tag";
            gameOverText.visible = true;
            again.visible = true;
            magaling.visible = false;
            game._paused = true;
            this.patayin();
            kansyon.stop();
            natay.play();
       }
        //Situation3
        if(game.physics.arcade.overlap(player,shadow)){
            this.lilimm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemyss);
        }
         else if(game.physics.arcade.overlap(player,shadows)){
            this.lilimmm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemyss);
        }
          else if(game.physics.arcade.overlap(player,shadowss)){
            this.lilimmmt(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemyss);
        }
        else{
            stat.text = "Araw"
        }
        if(game.physics.arcade.collide(player,enemyss)){
            stat.text = "Tag";
            gameOverText.visible = true;
            again.visible = true;
            game._paused = true;
            magaling.visible = false;
            this.patayin();
            kansyon.stop();
            natay.play();
            }

//Situation4
        if(game.physics.arcade.overlap(player,shadow)){
            this.lilimm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemysss);
        }
         else if(game.physics.arcade.overlap(player,shadows)){
            this.lilimmm(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemysss);
        }
          else if(game.physics.arcade.overlap(player,shadowss)){
            this.lilimmmt(3000,LT);
            stat.text = "Lilim";
            game.physics.arcade.collide(player,enemysss);
        }
        else{
            stat.text = "Araw"
        }
        if(game.physics.arcade.collide(player,enemysss)){
            stat.text = "Tag";
            gameOverText.visible = true;
            again.visible = true;
            game._paused = true;
            magaling.visible = false;
            this.patayin();
            kansyon.stop();
            natay.play();
            }

        },

      //timer
      timer: function (time,duration){
        setInterval(function(){
        if(duration<=0){
            player.kill();
            enemy1.kill();
            enemys.kill();
            enemyss.kill();
            enemysss.kill();
            shadow.kill();
            shadows.kill();
            shadowss.kill();
            again.visible = true;
      }
      else if(duration> 0){
        duration--;
        timeLabelTween.start();
      }
        timeLabel.text = ""+duration;
  },time)
},
    //timer_lilim
    lilimm: function(time,LT){
        setInterval(function(){
        this.shadow.kill();
    },time)
        },
    lilimmm: function(time,LT){
        setInterval(function(){
        this.shadows.kill();
    },time)
        },
    lilimmmt: function(time,LT){
        setInterval(function(){
        this.shadowss.kill();
    },time)
        },
    handlepause: function(){
    game._paused = true;         
      },
    resumee: function(){
        game._paused = false;
    },
    loopAudio: function(time){
        setInterval(function(){
            kansyon.play();
        },time);
    },
    playAG: function(){
        game.state.start("level1");
    },
    patayin: function(){
       player.kill();
       enemy1.kill();
       enemys.kill();
       enemyss.kill();
       enemysss.kill();
       shadow.kill();
       shadows.kill();
       shadowss.kill();
    },
}
             
   
