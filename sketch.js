//World, Engine, Bodies
//NAME SPACING -> shortcut
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  body = Bodies.rectangle(200, 380, 400, 20, options);
  World.add(world, body);
  
  var balloptions = {
    restitution: 2
  }
  
 ball = Bodies.circle(100,300,30, balloptions)
 World.add(world,ball);

  console.log(body);
  
}
function draw() {
  background(0);
  Engine.update(engine) 
  rectMode(CENTER);
 rect(body.position.x, body.position.y, 400, 20)
 ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y,30);
 
}