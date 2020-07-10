var bullet, wall, thickness, speed, weight, damage;

function setup() {
  createCanvas(1200,400);

  bullet = createSprite(200, 200, 80, 15);
  bullet.shapeColor = "white";

  speed = random (220, 320);
  weight = random (20, 80);
  thickness = random (20, 100);
  
  wall = createSprite(1100, height/2, thickness, height/2);
  wall.shapeColor = "grey";

  damage = 0.5* weight* speed* speed / (thickness* thickness* thickness);
}

function draw() {
  background("black");
  
  bullet.velocityX = speed;

  wall.depth = bullet.depth;
  bullet.depth = bullet.depth + 1;
  
  collide(bullet, wall);

  if (damage < 10){
    wall.shapeColor = "green";
  }
  else{
    wall.shapeColor = "red";
  }

  drawSprites();
}