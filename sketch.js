const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld,myEngine;

function setup(){
   createCanvas(1200,800);

   myEngine = Engine.create();
   myWorld = myEngine.world;

   ground = new Ground(600,790,1200,20);

   box1 = new Block(600,765);
   box2 = new Block(600,695); 
   box3 = new Block(600,625);
   box4 = new Block(600,555);
   box5 = new Block(600,485);
   box6 = new Block(600,415); 
   box7 = new Block(600,345);
   box8 = new Block(600,275);

   box11 = new Block(700,765);
   box21 = new Block(700,695); 
   box31 = new Block(700,625);
   box41= new Block(700,555);
   box51 = new Block(700,485);
   box61 = new Block(700,415); 
   box71 = new Block(700,345);
   box81 = new Block(700,275);

   box111 = new Block(800,765);
   box211 = new Block(800,695); 
   box311 = new Block(800,625);
   box411= new Block(800,555);
   box511 = new Block(800,485);
   box611 = new Block(800,415); 
   box711 = new Block(800,345);
   box811 = new Block(800,275);

   ball = new Ball(400,500);

   sling = new SlingShot(ball.body,{x:400,y:250});
}
function draw(){
    background(0);
    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();
    box81.display();

    
    box111.display();
    box211.display();
    box311.display();
    box411.display();
    box511.display();
    box611.display();
    box711.display();
    box811.display();

    ball.display();

    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}