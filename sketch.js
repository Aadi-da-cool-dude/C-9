var box
function setup() {
  createCanvas(600,600);
  box = createSprite (300, 300, 80, 80);
}

function draw() 
{
  background(30);

  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x -3
  }

  if (keyIsDown(RIGHT_ARROW)){
    box.x = box.x +3
  }

  if (keyIsDown(UP_ARROW)){
    box.y = box.y -3  
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y +30
  }


  drawSprites();
}




