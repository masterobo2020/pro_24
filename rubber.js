class rings {
    constructor(x) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,100,50, options);
      this.width = 100;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("orange");
      strokeWeight(4);
      stroke("black");
      ellipse(this.body.position.x,this.body.position.y,10,10);
    }
  };
  