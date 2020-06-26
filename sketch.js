var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var Sprites = []

function preload()
{
	
}

var bob1,bob2,bob3,bob4,bob5

var Roof

var rope1, rope2,rope3,rope4,rope5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Roof = new roof(width/2,100,width/2,50, "red")

	bob1 = new bob(300,300,50,"blue")
	bob2 = new bob(350,300,50)
	bob3 = new bob(400,300,50)
	bob4 = new bob(450,300,50)
	bob5 = new bob(500,300,50)

	console.log(bob1.body)
	console.log(Roof.body)

	rope1 = new rope(bob1.body, Roof.body, -(100), 0)
	rope2 = new rope(bob2.body, Roof.body, -(50),0)
	rope3 = new rope(bob3.body, Roof.body, 0, 0)
	rope4 = new rope(bob4.body, Roof.body, 50,0)
	rope5 = new rope(bob5.body, Roof.body, 100,0)
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  Engine.update(engine)
  
  UpdateAllSprites();
  drawSprites();
 
}

function UpdateAllSprites()
{
for (var i = 0; i < Sprites.length; i++)
  {
	  Sprites[i].Update()
  }
}

function keyPressed()	
{
	if (keyCode === 38)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100, y:0})
		Matter.Body.setStatic(bob1.body, false)
		console.log(bob1.position)
	}
}