var canvasH = 200,
    canvasW = 350;

function setup(){
  createCanvas(canvasW,canvasH);
  background (100, 100, 100);
}

function draw() {
  fill(174, 147, 174);
  //Primera estrella
  PP(0+20,0,100-20,100);
  PP(0,50,100,50);
  PP(0,100,100,0);
  PP(50,0,50,100);
  //Segunda estrella
  DDA(100+20,0,200-20,100);
  DDA(100,50,200,50);
  DDA(100,100,200,0);
  DDA(150,0,150,100);
  //tercera estrella
  Bresenham(200+20,0,300-20,100);
  Bresenham(200,50,300,50);
  Bresenham(200,100,300,0);
  Bresenham(250,0,250,100);
}


function PP (x1,y1,x2,y2){
  const dx = x2 - x1;
  const dy = y2 - y1;
  let stepX = 1;
  let stepY = 1;
  if (dx == 0){
    if (dy < 0){
      stepY = -stepY;
    }
    let x = x1;
    let y = y1;

    while (y != y2){
      point(x,y);
      y += stepY;
    }
  } else {
    const m = dy / dx;

    const b = y1 - m * x1;
    if (dx < 0) stepX = -stepX;
    let x = x1;
    let y = y1;
    while (x != x2) {
      point(x,y);
      x += stepX;
      y = m * x + b;
    }
  }
  noLoop();
}

function DDA (x1,y1,x2,y2){
    var ax,ay,x,y,res;
    var i;
    if(abs(x2-x1)>=abs(y2-y1))
        res=abs(x2-x1);
    else
        res=abs(y2-y1);

    ax=(x2-x1)/res;
    ay=(y2-y1)/res;

    x=x1;
    y=y1;

    i=0;
    while(i<=res){
        point(x, y);
        x=x+ax;
        y=y+ay;
        i++;
    }
}

function Bresenham(x1, y1, x2, y2){
    var dx = Math.abs(x2-x1);
    var dy = Math.abs(y2-y1);
    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;
    var err = dx-dy;

    while(true){
    point(x1, y1);

    if ((x1==x2) && (y1==y2)) break;
    var e2 = 2*err;
    if (e2 >-dy){ err -= dy; x1 += sx; }
    if (e2 < dx){ err += dx; y1 += sy; }
    }
}
