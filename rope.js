class rope{
    constructor(body1, body2, xOffset, yOffset){
        this.xOffset = xOffset
        this.yOffset = yOffset

        var options = {
            bodyA: body1,
            bodyB: body2, 
            pointB: {x: this.Offset, y: this.yOffset},
            stiffness: 0.01,
           
        }
        this.band = Constraint.create(options);
        //this.didfly = false
        World.add(world, this.band);
        Sprites.push(this)
    }

    Update(){
       
        var pointA = this.band.bodyA.position;
        var pointB = this.band.bodyB.position;
    
        strokeWeight(4);


        line(pointA.x, pointA.y, pointB.x + this.xOffset, pointB.y + this.yOffset);
        console.log(this.yOffset)
    }

    
}