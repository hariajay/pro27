
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var handle,rope1,rope2,rope4,rope5,rope6;
var chain;
function setup() {
	createCanvas(500, 500);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(160,300,45)
	bob2 = new Bob(205,300,45)
	bob3 = new Bob(250,300,45)
	bob4 = new Bob(295,300,45)
	bob5 = new Bob(340,300,45)
  handle = new Handle(width/2,100,270,35)
  rope1 = new Rope(bob1.Body,-bobDiameter*2)
 /* rope2 = new Rope(bob2.Body,{x:205,y:100})
  rope3 = new Rope(bob3.Body,{x:250,y:100})
  rope4 = new Rope(bob4.Body,{x:295,y:100})
  rope5 = new Rope(bob5.Body,{x:340,y:100})*/

	Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  background("green");

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  handle.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.Body,bob1.Body.position,{x:1,y:-3})
  }
}



