function Box(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    let options = {
        restitution: 0.5,
        friction: 0.5
    }
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
      stroke(255);
      fill(127);
      rect(0, 0, this.width, this.height);
      pop();
    }
}
