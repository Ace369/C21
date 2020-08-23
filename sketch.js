var bullet, wall;
var speed, weight, thickness;

var s = ((321 * Math.random()) + 223);
var w = ((52 * Math.random()) + 35);

speed = s;
weight = w;
thickness = ((83 * Math.random()) + 27);
wall.shapeColor(80, 80, 80);



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 50);
  wall = createSprite(1450, 200, thickness, 200);
  bullet.velocityX = speed;
}

function draw() {

  background(0);

  bullet.collide(wall);

  if (bullet.x > 1300) {

  var damage = 0.5 * speed * weight * speed / (thickness * thickness * thickness);
  bullet.velocityX = 0;

    if (damage > 10) {
      bullet.shapeColor = color(255, 0, 0); //red

    } else {
      bullet.shapeColor = color(0, 255, 0); //green

    }
    
    console.log(damage);
  }
  

  drawSprites();

}