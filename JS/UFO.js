class UFO{
  constructor(){
    //this.fast = 5;
    this.ufo_kokoro = 1;
    this.X = 50;
    this.Y = 50;
    this.W = 40;  //weight (ancho)
    this.H = 20;  //height (alto)
    this.limitB = false;
    this.limitA = false;
    //this.stepY = this.fast;
		//this.stepX = this.fast;
  }
//functions...............................................
  moveUFO(ufoX,ufoY){
    this.X=ufoX;
    this.Y=ufoY;
  }
  deadUFO(){
    this.ufo_kokoro = 0;
  }
  printUFO(){
    fill(30,150,30);
    rect(this.X,this.Y,this.W,this.H);
  }
  collisions(){
    if(this.X<=0){
      this.limitA = true;
    }
    else {
      this.limitA = false;
    }
    if(this.X+this.W>=600){
      this.limitB = true;
    }
    else {
      this.limitB = false;
    }


  }
}
