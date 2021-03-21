var thickness,wall;


var bullet,speed,weight;

function setup() {
  createCanvas(1800,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
 
}

function draw() {
  background(0);  
if(hascollied(bullet,wall))
{
  bullet.velocityX=0;
  var dammge=0.5 * weight * speed* speed/(thickness * thickness * thickness);
  if(dammge>10)
  {
    wall.shapeColor="red"

    }
 

if(dammge<10)
{
  wall.shapeColor="green"
}

}
  drawSprites();
}

function hascollied(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}