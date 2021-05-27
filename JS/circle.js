var canvasH = 500,
    canvasW = 600;

function setup(){
  createCanvas(canvasW,canvasH);
  background (100, 100, 100);
}

function draw() {

if (mouseIsPressed) {
  fill(174, 147, 174);
  circle(mouseX,mouseY,20);
}



}
