class Ground{

    constructor(x){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, 300, 80,20, options)
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        var ang = this.body.angle
        Matter.Body.rotate(this.body, angle )
        rectMode(CENTER)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rect(0,0, 80,20)
        pop()
        angle = angle + 0.1
    }

}