var canvasH = 500,
    canvasW = 600,
    playerX_Axis = 270,
    xSpeed = 3;

var player_kokoro = 3;

var ufos = [];
//var ufo = new Object;
var alienX = 10,
    alienY = 10;
var alienRpaidin = 1;

var toBack = false;

var bullets = [];
var bulletsB = [];
var bullet = new Object;

var intervalID = window.setInterval(fireB, 1000);
//----------------------------------------------------------------------
//----------------------------------------------------------------------
function setup(){
  createCanvas(canvasW,canvasH);
  //background (100, 100, 100);
  ufo_Start();
}

function draw() {
  if (player_kokoro>0 && alienRpaidin<6 && alienY<canvasH-60) {
    background (100, 100, 100);
    panzer();
    movePanzer();
    Alien();
    bullethell();
  }
  else if (player_kokoro==0 || alienY>=canvasH-60) {
    background (100, 0, 0);
    panzer();
    for (var i = 0; i < ufos.length; i++) {
      if(ufos[i].ufo_kokoro>0){
        ufos[i].printUFO();
      }
    }
  }
  else if (alienRpaidin==6){
    background (0, 100, 150);
    panzer();
  }
}

function keyTyped() {
  if (key === 'w' && bullets.length==0) {
    fire();
  }
}

//----------------------------------------------------------------
//Player
function panzer() {
  fill(30,30,30);
  rect(playerX_Axis, canvasH-30, 40, 20);
}

function movePanzer(){
  if (keyIsDown(65)) {
    playerX_Axis = playerX_Axis - xSpeed;
  }
	if (keyIsDown(68)) {
    playerX_Axis = playerX_Axis + xSpeed;
  }
}

//---------------------------------------------------------------------
//Aliens
function ufo_Start(){
  for (var i = 0; i < 5; i++) {
    ufos.push(new UFO());
  }
}


function Alien(){
  for (var i = 0; i < ufos.length; i++) {
    var space = i*100;

    ufos[i].moveUFO(alienX+space,alienY);

    if(ufos[i].ufo_kokoro>0){
      ufos[i].printUFO();
      ufos[i].collisions();

      if(ufos[i].limitA == true){
        toBack = false;
        alienY += 20;
      }
      if(ufos[i].limitB == true){
        toBack = true;
      }
    }
  }

  if (toBack == false) {
    alienX += alienRpaidin;
  }
  if (toBack == true) {
    alienX -= alienRpaidin;
  }
}

//---------------------------------------------------------------------
//Bullets
function ammo(xRef,r,g,b){
  bullet = {
    R: r,
    X: xRef,
    Y: canvasH-50,
    W: 10,  //weight (ancho)
    H: 10,   //height (alto)
    moveB_UP: function(){
     this.Y -= 10;
    },
    moveB_DOWN: function(){
     this.Y += 5;
    },
    printB: function(){
      //fill(255,245,0); //bala amarilla
      //fill(0,245,0); //bala verde
      fill(r,g,b);
      rect(this.X,this.Y,this.W,this.H);
    }
  }
}

function bullethell(){
  for (var i = 0; i < bullets.length; i++) {
    if (bullets[i].R==255) {
      bullets[i].moveB_UP();
    }
    if (bullets[i].R==0) {
      bullets[i].moveB_DOWN();
    }

    //COLLISIONS*******************************************

    if (bullets[i] != null){
      for (var j = 0; j < ufos.length; j++) {
        if ( ufos[j].ufo_kokoro == 1 && (bullets[i].Y<alienY+20) && (bullets[i].X>ufos[j].X-10 && bullets[i].X<ufos[j].X+40) ){
          bullets.pop()
          ufos[j].deadUFO();
          alienRpaidin++;
          break;
        }
        if(bullets[i].Y == 0){
          bullets.pop();
          break;
        }
      }
    }

    if (bullets[i] != null){
      bullets[i].printB();
    }
  }

//lazers**********************************************************************
  for (var i = 0; i < bulletsB.length; i++) {
    if(bulletsB[i].Y>=canvasH) {
      bulletsB.splice(i,1);
      //console.log(bulletsB.length);
    }
    if(bulletsB[i] != null && bulletsB[i].Y>canvasH-40 && bulletsB[i].X>playerX_Axis-10 && bulletsB[i].X<playerX_Axis+40) {
      player_kokoro--;
      bulletsB.splice(i,1);
    }
    if(bulletsB[i] != null){
      bulletsB[i].printB();
      bulletsB[i].moveB_DOWN();
    }
  }

}

function fire(){
  xAMMO = playerX_Axis+15;
  ammo(xAMMO,255,245,0);

  var bulletN = new Object(bullet);
  bullets.push(bulletN);
}

function fireB(){
  var rand = Math.floor(Math.random() * (5 - 0)) + 0;
  if (ufos[rand].ufo_kokoro>0) {
    bulletsB.push(new LAZER(20+alienX+(rand*100),alienY+20));
  }
}
