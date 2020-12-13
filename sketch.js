const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo

function setup(){

    createCanvas(1200,400)

    en = Engine.create()
    wo = en.world
    var options={
        isStatic:true
    } 

    g1=Bodies.rectangle(500,200,200,20, options)
     World.add (wo, g1)

     g2=Bodies.rectangle(800,300,200,20, options)
     World.add (wo, g2)

     b1=new Box(450,170)
     b2=new Box(500,170)
     b3=new Box(550,170)
     b4=new Box(480,130)
     b5=new Box(530,130)
     b6=new Box(500,100)

     b7=new Box(750,270)
     b8=new Box(800,270)
     b9=new Box(850,270)
     b10=new Box(780,230)
     b11=new Box(830,230)
     b12=new Box(800,200)

     ball1=new Ball(100,250)
     rope1=new Rope(ball1.body, {x:100,y:20})
 
}

function draw(){

background("Black")
Engine.update(en)
 
rectMode(CENTER)
rect(g1.position.x,g1.position.y,200,20)
rect(g2.position.x,g2.position.y,200,20)
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
ball1.display()
rope1.display()

drawSprites()

}


function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
rope1.fly()
}