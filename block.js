class block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        this.visibility - 255;
        
      }
      score() {
        if(this.visibility < 0 && this.visibility > -1005) {
          score = score + 1;
        }
      }
      display(){
        var angle = this.body.angle;
         if(this.body.speed < 3) {
           push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this,width,this.height);
          pop();
         }
        else{
     World.remove(world,this.body);
     push();
     this.visibility = this.visibility - 5;
     tint(255,this.visibility);
     //rect(this.body.position.x, this.body.position.y, 50, 50);
     pop();
        }
      
     
        
      }
}