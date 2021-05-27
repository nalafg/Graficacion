var canvasH = 500,
    canvasW = 500;

function setup(){
  createCanvas(canvasW,canvasH);
  background (174, 147, 174);
}


var y = canvasH / 2;
var x = 0;

function draw() {
  //background(0);
  x++;
  stroke(0);
  point(x,y);
  if (x == canvasW) {
    noLoop();

  }
}
