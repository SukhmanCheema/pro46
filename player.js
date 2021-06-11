class Player{

    constructor(){
    
      this.name=null;
    
      this.distance=0;
    
      this.index=null;
    
     this.rank=0;
    }
    
    getCount(){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",(data)=>{
    
        playerCount=data.val();
        
        })
    }
      updateCount(count) {
      var playerCountref=database.ref("/")
     playerCountref.update({
    
     "playerCount":count
    
     })
      } 
    
    update(){
    
    var playerIndex="players/player" + this.index;
    
    var playerIndexref=database.ref(playerIndex)
    
    playerIndexref.set({
    
    "name":this.name,
    
    "distance":this.distance,
    
    })
    
    }
    
     static getPlayerInfo(){
    
    var playerInforef=database.ref("players")
    
      playerInforef.on("value",(data)=>{
    
        allPlayers=data.val();
    
    
      })
    
     }
    
     getRank(){
    
     var playerRankRef=database.ref("rank");
    
     playerRankRef.on("value",()=>{
    
    this.rank=data.val();
    
    
    
     })
    
    
     }
     static updateRank(rank){
    
     var playerRankRef=database.ref("/");
    
     playerRankRef.update({
    
      "rank":rank,
      
    
     })
    
    
    
     }
    
    
    }
    
        
    
    
    