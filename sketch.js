var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snowfall;
var bg;
var ground;

function preload(){
  bg=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1200, 625);
  engine = Engine.create();
  world = engine.world;
  snowfall=new snow(100,100,100,100);
  ground=new Ground(600,530,1200,20);
}
 


function draw() {
  background(bg);
  textSize(20)
  Engine.update(engine);
   snowfall.display();                             

    if(frameCount%20===0){
      snowfall.push(new snow(random(0,100),0))
    }

 for (var a=0; a < snowfall.length; a++){
   snowfall[a].display();
 }
}