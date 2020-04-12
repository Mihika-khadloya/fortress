const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var pillar1,pillar2,pillar3;
var pillar4,pillar5,pillar6,pillar7;
var flag;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  pillar1 = new Pillar(200,240,250,50);
  pillar2 = new Pillar(150,250,230,50);
  pillar3 = new Pillar(250,250,230,50);

  pillar4 = new Pillar(300,230,270,50);
  pillar5 = new Pillar(100,230,270,50);
  pillar6 = new Pillar(70,220,290,20);
  pillar7 = new Pillar(330,220,290,20);
  
  var options={
    isStatic: true
  }
  flag = Bodies.circle(200,90,35,options);
  World.add(world,flag);
  
}

function draw() {
  background(0); 
  Engine.update(engine);

  pillar1.display();
  pillar2.display();
  pillar3.display();

  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();

  ellipseMode(RADIUS);
  fill("orange");
  ellipse(flag.position.x,flag.position.y,35,35);
  
}