class Quiz{
constructor(){
}
getState(){
database.ref("gameState").on("value",(data)=>{
gameState=data.val( )
})
}
updateState(state){
    database.ref("/").update({
        gameState:state //firebase
    })
  
}
start(){
    if(gameState===0){
    player=new Player();
    player.getCount();
    question=new Question();
    question.display()
    }
}
play(){
question.hide()
background("black")
fill("white")
textSize(30)
text("Result Of THe Quiz",340,50)
Player.getInfo()
if(allFriends!=undefined){
    var  pos=230;
    fill("pink")
    textSize(20)
    text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230)
for(var plr in allFriends){
    var correctAns="2"
    if(correctAns===allFriends[plr].answer)
    fill("green")
    else{
        fill("red")
    }
   pos+=30
   textSize(20)
   text(allFriends[plr].name+ ":"+allFriends[plr].answer,250,pos) 
}
}
}
}