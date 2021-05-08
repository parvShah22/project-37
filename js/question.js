class Question{

 constructor(){
this.title=createElement("h1")
this.input1=createInput("Name")
this.input2=createInput("Ans:")
this.button=createButton("Submit")
this.Question=createElement("h3")

this.option1=createElement("h4")
this.option2=createElement("h4")
this.option3=createElement("h4")
this.option4=createElement("h4")


}
hide(){
    this.title.hide()
    this.input1.hide()
    this.input2.hide()
    this.button.hide()
    this.Question.hide()
}
display(){
this.title.html("My Quiz Game")
this.title.position(350,0)

this.Question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter?")
this.Question.position(150,80)

this.option1.html("1. EveryOne")
this.option1.position(150,100)

this.option2.html("2. Envelope")
this.option2.position(150,120)

this.option3.html("3. Estimate")
this.option3.position(150,140)

this.option4.html("4. Example")
this.option4.position(150,160)

this.input1.position(150, 230);
this.input2.position(350, 230); 
this.input2.style('width', '25px');
this.button.position(290, 300);

this.button.mousePressed(()=>{
this.title.hide()
this.input1.hide()
this.input2.hide()
this.button.hide()
player.name=this.input1.value()
player.answer=this.input2.value()
playerCount++
player.number=playerCount

player.update()
player.updateCount(playerCount)
})

}


}