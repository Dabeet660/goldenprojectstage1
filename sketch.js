const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var prince;
var ground;

var x1 = 0;
var x2;
var scrollspeed = 10;

function preload(){
	backgroundImg = loadImage("images/bg.jpg")
}

function setup(){
	createCanvas(displayWidth, displayHeight-115);


	engine = Engine.create();
	world = engine.world;

  x2 = width;
  

	prince = new MPC(displayWidth/2-900,displayHeight/2+400,200,200);
  ground = new Ground(displayWidth/2-900,displayHeight/2+420,100000,10);
}


function draw(){

  image(backgroundImg,x1,0,width,height);
  image(backgroundImg,x2,0,width,height);

  x1 -= scrollspeed;
  x2 -= scrollspeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

  Engine.update(engine);

  prince.display();
  ground.display();
  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == 32){
       Body.setVelocity(prince.body,{x:2,y:-12})
  }
}