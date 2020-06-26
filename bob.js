class bob {
    constructor(x,y,raduis, color)
    {
        
        this.height = height
        this.width = width
        this.color = color
        this.x = this.y = y

        this.raduis = raduis
        
        var Options = {
            //restitution: 0.3,
            friciton: 0.5,
            density: 1.2
         }

        this.body = Bodies.circle(x, y ,raduis/2, Options)
        World.add(world, this.body)

        this.position = this.body.position
        
        Sprites.push(this)
    }

    Update()
    {
        this.x = this.body.position.x
        this.y = this.body.position.y

        this.position = this.body.position

    

        ellipse(this.body.position.x, this.body.position.y,this.raduis)



    }
}