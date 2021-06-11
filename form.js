class Form{

    constructor(){
        this.title=createElement("h1");
        this.input=createInput().attribute("placeHolder","name");
        this.button=createButton("START");
        this.greeting=createElement("h3");
         this.reset=createButton("RESET");
    }
    
    display(){
    
    this.title.html("AMONG US");
    this.title.position(displayWidth/2-300,displayHeight/2-300);
    
    this.input.position(displayWidth/2-300,displayHeight/2-200);
    
    this.button.position(displayWidth/2-300,displayHeight/2-100);
     this.reset.position(displayWidth-350,50)
    
    this.button.mousePressed(()=>{
    
        this.input.hide();
    
        this.button.hide();
    
    
        player.name=this.input.value();
        playerCount++ ;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
    
        this.greeting.html("hello "+player.name);
       
        this.greeting.position(displayWidth/2-300,displayHeight/2-200);
    })
      this.reset.mousePressed(()=>{
       player.updateCount(0);
    
       game.updateGameState(0);
      
      window.location.reload();
    
      Player.updateRank(0);
      
      })
    }
    hide(){
        this.input.hide();
        this.button.hide(); 
        this.title.hide();
        this.greeting.hide();
    }
    
    
    
    }
    