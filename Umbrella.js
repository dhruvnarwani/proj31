class Umbrella{
    constructor(x, y, width, height){
      var options = {
      isStatic:true,
      'friction':0.1,
      'density':1.0
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/walking_1.png");
      World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        translate(pos.x , pos.y);
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}