const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball1 = new Box(200,200,40,40)
    ball2 = new Box(210,100,30,30)
    ground = new Ground(200,390,400,20)
    console.log(ground)
}

function draw(){
    background(0);
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ground.display();
   
}