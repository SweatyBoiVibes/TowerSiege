class Rope{
    constructor(bodyA, pointB){
        var op={
            bodyA: bodyA,
            pointB: pointB,
            length:30,
            stiffness:0.04
        }

        this.body=Matter.Constraint.create(op)
        this.b=pointB
        World.add(wo, this.body)

    }


    display(){
        if(this.body.bodyA){
            var a=this.body.bodyA.position
            var b=this.b
            line(a.x,a.y,b.x,b.y)
        }
      


    }

    fly(){
        this.body.bodyA=null
    }
}