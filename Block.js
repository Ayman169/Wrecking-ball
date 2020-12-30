class Block{
    constructor(x,y){
        var options={
            restitution : 0,
            friction : 2,
            density : 1
        }
        this.body=Bodies.rectangle(x,y,70,70,options);
        this.width= 70;
        this.height= 70;
        
        World.add(myWorld,this.body);
    }
    
     display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        stroke("red");
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}