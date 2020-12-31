
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball5
var bottom,left,right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	ball = new Ball(100,500,20);

	var options={isStatic:true};
	 bottom=Bodies.rectangle(650,680,100,20,options);
World.add(world,bottom);

var options={isStatic:true};
left=Bodies.rectangle(550,660,20,100,options);
World.add(world,left);

var options={isStatic:true};
right=Bodies.rectangle(750,660,20,100,options);
World.add(world,right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill ("brown");
  rect(this.bottom.position.x,this.bottom.position.y,200,20);
  fill ("brown");
  rect(this.left.position.x,this.left.position.y,20,200);
  fill ("brown");
  rect(this.right.position.x,this.right.position.y,20,200);

  ground.display();
  ball.display();
  drawSprites();
 
}
 
function keyPressed(){
 if (keyCode===UP_ARROW)
 Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});

}


