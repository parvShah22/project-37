class Player{
    constructor(){
        this.answer=null
        this.name=null;
        this.number=null;
    }
    getCount(){
        
            database.ref("playerCount").on("value",(data)=>{
              playerCount =data.val()//variable                         value=val
            })
        }
        updateCount(count){
            database.ref("/").update({
                playerCount:count //firebase
            })
          
        }
        update(){
            var playerIndex="Players/Player"+ this.number
            database.ref(playerIndex).set({
                name:this.name,
                answer:this.answer
            })

        }

        static getInfo(){
           database.ref("Players").on("value",(data)=>{
            allFriends=data.val()//variable
           })
        }
        
       
    } 
  
