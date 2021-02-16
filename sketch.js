


function preload(){
  
  
  
 
 
}



function setup() {
  createCanvas(600, 600); 


forest = createSprite(200,200,400,400);

forest.x = forest.width/2 ;
forest.velocityX = -2;
  
player = createSprite(30,283,10,10);

player.scale = 0.2;

 
  
}


function draw() {
  
  background(255);  
    
  if(ground.x<0) {
    forest.x=forest.width/2;
  }
  
    
 forest.depth = player.depth;
 player.depth = player.depth + 1;
 if (keyDown("right")) {
   player.x = player.x + 3;
   player.y = player.y;
 }
 if (keyDown("left")) {
   player.x = player.x - 3;
   player.y = player.y;
 }
 if (forest.x < 200) {
  forest.x = forest.width / 2;
 }
drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    
}



