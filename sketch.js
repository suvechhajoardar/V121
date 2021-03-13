var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);

  weight=random(30,52);
  bullet =createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="white"
}

function draw() {
  background("black"); 
  bullet.velocityX=speed;
 if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage<10){
wall.shapeColor="green"
}
if(damage>10){
wall.shapeColor="red"
}
 }
 drawSprites();
}

  function hascollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    
      return false;
    
   
  }
  
