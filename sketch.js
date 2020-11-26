var PLAY =1
var END = 0
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,survivalTime=0;
var score,ground;
var obs,banan;

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas (400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground= createSprite(400,350,900,10);
  ground.velocityx= -4;
  ground.x=ground.width/2;
  console.log(ground.x)

  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}

function draw() {
  background("lightblue");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score" + score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount);
  text("Survival Time: " + survivalTime,100,50);
  
   if(ground.x<0){
    ground.x=ground.width/2
}
  
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY=-12;
}
monkey.velocityY = monkey.velocityY + 0.8;
  

 monkey.collide(ground);
  
   bananas();
  obstacles();

drawSprites();
}

function bananas(){
  
if(frameCount % 80 === 0){
  var banana = createSprite(400,150,10,10);
  banana.addImage(bananaImage);
  
  rand=Math.round(120,200);
  banana.velocityX=-7;
  banana.lifetime=135;
  banana.scale= 0.1;
 
    FoodGroup.add(banana);
}

}
function obstacles(){
  
  if(frameCount % 300 === 0){
  obs = createSprite(370,330,10,10);
    obs.addImage(obstacleImage);
    rande=Math.round(120,200);
    obs.velocityX=-7;
    obs.lifetime=136;
    obs.scale= 0.1;
    
    
  obstacleGroup.add(obs);
}
}



