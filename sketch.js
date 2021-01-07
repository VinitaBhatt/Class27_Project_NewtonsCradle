
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobRadius = 30;
	//Create the Bodies Here.
	roof = new Roof(400,100,400,20);
	bob1 = new Bob(400-bobRadius*4,400,bobRadius);
	bob2 = new Bob(400-bobRadius*2,400,bobRadius);
	bob3 = new Bob(400,400,bobRadius);
	bob4 = new Bob(400+bobRadius*2,400,bobRadius);
	bob5 = new Bob(400+bobRadius*4,400,bobRadius);
	rope1 = new Rope(bob1.body,roof.body,-bobRadius*4,0);
	rope2 = new Rope(bob2.body,roof.body,-bobRadius*2,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobRadius*2,0);
	rope5 = new Rope(bob5.body,roof.body,bobRadius*4,0);
	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}

}

