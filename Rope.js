class Rope{
    constructor(bodyA,bodyB,xOffset,yOffset){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:xOffset,y:yOffset}
            //length :100
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        strokeWeight(4);
        
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,
             this.chain.bodyB.position.x+this.chain.pointB.x, 
             this.chain.bodyB.position.y+this.chain.pointB.y);
    }
}