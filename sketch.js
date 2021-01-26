const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var hammer;
var ground;
var box1,box2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer = new Hammer(200,200);
  
  ground = new Ground(600,height,1200,20);

  box1 = new Box(850,320,150,150,"black");

  box2 = new Box(250,320,100,50);

  var options={
    'restitution':0.8,
    'friction':0.3,
    'density':1.0
  }

  ball = Bodies.circle(1100,100,50,options);
  World.add(world,ball);


  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");
  hammer.display();
  ground.display();
  box1.display();
  box2.display();

  ellipseMode(RADIUS);
  fill("darkblue");
  strokeWeight(4);
  stroke("black");
  ellipse(ball.position.x,ball.position.y,50,50);

  drawSprites();
 
}



