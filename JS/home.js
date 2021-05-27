var canvasH = 500,
    canvasW = 600;

function setup(){
  createCanvas(canvasW,canvasH);
  background (100, 100, 100);
}

function draw() {

  fill(174, 147, 174);
  rect(130, 60, 55, 80);
  triangle(100, 150, 250, 150, 250, 50);
  triangle(400, 150, 250, 150, 250, 50);

  rect(120,150, 120, 120);
  rect(250,140, 130, 130);

  fill (GRAY);
  rect(250,170, 100, 100);
  fill(174, 147, 174);
  rect(250,180, 90, 90);

  rect(120,280, 120, 120);
  rect(250,280, 120, 120);

  noLoop();

}
