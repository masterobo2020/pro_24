class Hammer {
    constructor(x, y) {

      this.body = Bodies.rectangle(x, y, 200, 20);
      this.width = 200;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("orange");
      strokeWeight(2);
      stroke("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  