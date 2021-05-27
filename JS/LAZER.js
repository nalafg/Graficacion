class LAZER{
  constructor(x,y){
    //this.fast = 5;
    this.R = 0;
    this.X = x;
    this.Y = y;
    this.W = 10;  //weight (ancho)
    this.H = 10;  //height (alto)
  }
//functions...............................................
  moveB_DOWN(){
   this.Y += 2;
 }
  printB(){
    fill(0,245,0); //bala verde
    //fill(r,g,b);
    rect(this.X,this.Y,this.W,this.H);
  }
}
