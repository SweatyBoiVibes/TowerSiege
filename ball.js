class Ball{

    constructor(x, y){
    
    var o={
        restitution:0.8,
        friction:0.5,
        density:0.5
    }
    
    this.body=Bodies.circle(x,y,30,o)
    World.add(wo,this.body)
    }
    
    display(){
      var pos=this.body.position
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS)
      ellipse(0,0,30,30)
      pop()
    }
    
    }