class Syringe extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
    
      this.visibilty=255;
  
      this.image2 = loadImage("images/syringe.png");
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      // image(this.image,30,525,50,50);
      
        if(this.body.position.x>=1100&&this.body.position.y>=500){
          World.remove(world, this.body);
          /*push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();*/
         }else{
          super.display();
         }
         
       }
      
      /*randomImg(){
        var rand=Math.round(random(1,3));
        console.log(rand);
        switch(rand){
          case 1: image(this.image1,this.body.position.x,this.body.position.y,50,50);
          break;
          case 2: image(this.image2,this.body.position.x,this.body.position.y,50,50);
          break;
          case 3:  image(this.image3,this.body.position.x,this.body.position.y,50,50);
          break;
        }
      }*/
    }
  
  