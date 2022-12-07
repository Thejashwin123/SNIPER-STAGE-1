var playbutton,waitimg
var gameState="wait"

function preload(){
waitimg=loadImage("SCREEN1.gif")


}

function setup(){
createCanvas(windowWidth-50,windowHeight-50)


playbutton=createImg("play.png")
playbutton.position(width/2,height)

gun1=createImg("gun1")
gun2=createButton("gun2")
gun3=createButton("gun3")

gun1.position(width/2,height-100)
gun2.position(width/2-200,height-100)
gun3.position(width/2+200,height-100)

gun1.hide()
gun2.hide()
gun3.hide()




}

function draw(){
    if (gameState==="wait"){
background(waitimg)
}


if(playbutton.mousePressed(()=>{
    gameState="level1"
}))


if (gameState==="level1"){
    background("green")
    playbutton.hide()

    gun1.show()
gun2.show()
gun3.show()
}

}