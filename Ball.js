class Ball{
    constructor(x,y){
        var options={
            restitution : 1,
            friction : 2,
            density : 4
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width= 50;
        this.height= 50;
        
        World.add(myWorld,this.body);
    }
    
     display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("crimson");
        stroke("blue");
        strokeWeight(3);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}