class Box{

constructor(x, y){

var o={
    restitution:0.8,
    friction:0.5,
    density:0.5
}

this.body=Bodies.rectangle(x,y,50,50,o)
World.add(wo,this.body)
}

display(){
  var pos=this.body.position
  var angle=this.body.angle
  push()
  translate(pos.x,pos.y)
  rotate(angle)
  rectMode(CENTER)
  rect(0,0,50,50)
  pop()
}

}