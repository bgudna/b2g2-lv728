var multiplier = [];
var xcord;

function setup() {
    createCanvas(600, 450);
    background(100);
    
    xcord = random(50,200);

    for (i = 0; i < xcord; i++) {
        walker = new Walker(random(10, 590), random(10, 440), random(0, 255), random(4, 20));
        multiplier.push(walker);
    }
    
}




function draw() {

    for(j = 0; j < multiplier.length; j++) {
        multiplier[j].render();
        multiplier[j].step();
    }
}

// walker.render();
//         walker.step();