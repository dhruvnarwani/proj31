class Drops{
    constructor(x, y, width, height){
      var options = {
      'friction':0.1,
      'density':1.0
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        translate(pos.x , pos.y);
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}