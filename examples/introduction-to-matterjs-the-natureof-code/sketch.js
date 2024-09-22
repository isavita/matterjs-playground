var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine;
var world;
var boxes = [];
var ground;
function setup() {
    createCanvas(640, 480);
    engine = Engine.create();
    world = engine.world;
    ground = new Boundary(320, 470, 600, 50);
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10, 50), random(10, 50)));
}

function draw() {
    background(51);
    Engine.update(engine);
    boxes.forEach(box => box.show());
    ground.show();
}
