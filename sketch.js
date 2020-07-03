function setup() {
    createCanvas(640, 360);
    background(195,31,49);
    pointer = new Point(100, 100);
}


function draw() {
    pointer.render();
    pointer.step();
}