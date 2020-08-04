const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var straw, slingshot;
var dustbin1,Dustbinimag;
var catapultImg,catapult;
var gameState = "onSling";

var score = 0;

function preload() {
   backgroundImg=loadImage("images/bg.jpg");
   catapultImg=loadImage("images/Slingshot.png");
   Dustbinimage=loadImage("images/tile000.png");
   image1 = loadImage("images/straw.png");
   image2 = loadImage("images/mask.png");
 image3 = loadImage("images/syringe.png");
 Earthimg = loadImage("images/Earth.png");
  
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight+50);
    engine = Engine.create();
    world = engine.world;

    
    
    ground = new Ground(600,height-100,1200,20);
  

    // dustbin1 = new Surgicaldustbin(1200,750,50,50);
    straw = new Straw(150,50);
   
    catapult = createSprite(150,590,100,100);
    catapult.addImage(catapultImg);
    
    Earth= createSprite(1080,450,100,100);
    Earth.addImage( Earthimg );
    dustbin1 = createSprite(1200,350,50,50);
    dustbin1.addImage( Dustbinimage);
    dustbin1.scale=0.55;
   // dustbin1.debug=true;
    dustbin1.setCollider("rectangle",0,0,100,100);
    slingshot = new SlingShot(straw.body,{x:150, y:525});
}

function draw(){
   
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        fill("red");
        text(mouseX+','+mouseY,50,50);
    Engine.update(engine);
    //strokeWeight(4);
    
    straw.display();
   //dustbin1.display();
    //log6.display();
    slingshot.display();
   // bird.randomImg();
  
    drawSprites();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(straw.body, {x: mouseX , y: mouseY});
       
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

