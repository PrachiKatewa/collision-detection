var movingRect,fixedRect;
function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400,400,50,50);
  movingRect.shapeColor = "blue";

  fixedRect = createSprite(400,400,50,50);
  fixedRect.shapeColor = "blue";

}

function draw() {
background(0);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2
  && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
else{
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}

  drawSprites();
}