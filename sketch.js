var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	Matter.Bodies.circle(x,y,radius,[options],[maxSides])

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	groundObj.display();
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(body, position, force)
	}
}



