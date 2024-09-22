function Boundary(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  let options = {
    friction: 0.3,
    restitution: 0.6,
    isStatic: true
  };
  this.body = Bodies.rectangle(x, y, width, height, options);
  Composite.add(world, this.body);

  this.show = function() {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      noStroke();
      fill(0, 100, 0);
      rect(0, 0, this.width, this.height);
      pop();
  }
}
