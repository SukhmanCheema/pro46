class Game{

    constructor(){
    
    
    }
    
    getState(){
    
    var gameStateref=database.ref("gameState");
    gameStateref.on("value",(data)=>{
    
    gameState=data.val();
    
    
    })
    
    
    }
    
    updateGameState(state){
    
    var gameStateref=database.ref("/");
    
    gameStateref.update({
    
    "gameState":state
    
    
    })
    
    
    
    
    }
    
     start(){
    
      if(gameState===0){
    
        form=new Form() 
    
        form.display();
    
        player=new Player()
    
        player.getCount();
    
      }
playerRed=createSprite(400, 200, 50, 50);
playerRed.addImage("stand",standImg);
playerRed.addAnimation("walk",walkImg);
playerRed.addImage("dead",deadImg);
playerRed.addAnimation("reverse",reverseImage);
playerRed.addImage("reversestand",rightStandImg)

block1=createSprite(280,50,400,10);
block1.addImage("hr",hrImage);
block1.scale=2;

block2=createSprite(55,200,10,300);
block2.addImage("vr",vrImage);
block2.scale=2;


block3=createSprite(280,360,400,10);
block3.addImage("hr1",hrImage);
block3.scale=2;

block4=createSprite(480,100,10,150);
block4.addImage("vr",vrImage);
block4.scale=1;

block5=createSprite(600,250,150,10);

block6=createSprite(600,350,150,10);

block7=createSprite(700,150,10,150);

block8=createSprite(900,50,400,10);

block9=createSprite(1130,200,10,300);

block10=createSprite(830,350,200,10);

block11=createSprite(950,450,10,200);

block12=createSprite(1130,450,10,200);

block13=createSprite(1130,650,10,200);

block14=createSprite(830,550,200,10);

block15=createSprite(930,750,300,10);

block16=createSprite(630,750,350,10);

laptop=createSprite(280,300,20,20);

     }
     
     play(){
       
      form.hide();
      Player.getPlayerInfo();
      
      //textSize(30);
      // text("THE GAME HAS BEGUN",100,200);
      background("aqua");
  
      image(bgImage,30,70,500,400);
      drawSprites();
      if(keyDown(UP_ARROW)){
    
      playerRed.y=playerRed.y-5;
      playerRed.changeAnimation("walk",walkImg);
    
    }
    
     if(keyDown(DOWN_ARROW)){
    
      playerRed.y=playerRed.y+5;
      playerRed.changeAnimation("walk",walkImg);
    
    }
    
     if(keyDown(RIGHT_ARROW)){
    
     playerRed.x=playerRed.x+5;
    
     playerRed.changeAnimation("reverse",reverseImage)
    
     }
    
     if(keyDown(LEFT_ARROW)){
    
     playerRed.x=playerRed.x-5;
    
     playerRed.changeAnimation("walk",walkImg);
    
     }
     if(keyWentUp(UP_ARROW)|| keyWentUp(DOWN_ARROW)|| keyWentUp(LEFT_ARROW)){
    
      playerRed.changeImage("stand",standImg);
    
    
     }
    if( keyWentUp(RIGHT_ARROW)){
      playerRed.changeImage("reversestand",rightStandImg)
    }
    
    
     playerRed.collide(block1);
     playerRed.collide(block2);
     playerRed.collide(block3);
     playerRed.collide(block4);
     playerRed.collide(block5);
     playerRed.collide(block6);
     playerRed.collide(block7);
     playerRed.collide(block8);
     playerRed.collide(block9);
     playerRed.collide(block10);
     playerRed.collide(block11);
     playerRed.collide(block12);
    
    if(laptop.isTouching(playerRed)){
     if(lpCount===0){
      lpSwitch=createSprite(laptop.x+200,laptop.y+200,20,20);
      lpSwitch.shapeColor="red";
    
     }
       lpCount++; 
    }
    
    if(mousePressedOver(lpSwitch)){
      gameState1="text";
      
    
    
    }
     if(gameState1==="text"){
    
      fill("blue");
      textSize(20);
     text("SCAN THE CARD",laptop.x,laptop.y+100);
    
     }
    }
      
    
     
    
    end(){
    
    console.log("THE GAME HAS ENDED");
    
    fill("blue");
    
    textSize(25);
    
     text("rank: " + playerRed.rank,displayWidth/2,camera.position.y);
    
     
    
    }
    
    
    
    }
    
    
    