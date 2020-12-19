
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);
      

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  roof=new Roof(400,250,350,50)
	  ball=new bob(300,600)
	  ball1=new bob(350,600)
	  ball2=new bob(400,600)
	  ball3=new bob(450,600)
	  ball4=new bob(500,600)
	  rope=new Rope(ball.body,roof.body,-100,0)
	  rope1=new Rope(ball1.body,roof.body,-50,0)
	  rope2=new Rope(ball2.body,roof.body,0,0)
	  rope3=new Rope(ball3.body,roof.body,50,0)
	  rope4=new Rope(ball4.body,roof.body,100,0)
	   Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background("white");
  roof.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-25})
	}
}


