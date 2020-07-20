var cols, rows;
var cellBlock = 40;
var grid = [];

function setup() {
    createCanvas(400, 400);
    background(25,31,49);
    cols = floor(width/cellBlock);
    rows = floor(height/cellBlock);

    for (x = 0; x < rows; x++) {
        for (y = 0; y < cols; y++) {
            var cell = new Cell(x, y);
            grid.push(cell);
        }    
    }

    //pointer = new Point(100, 100);
}


function draw() {
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }
    // pointer.render();
    // pointer.step();
}

function Cell(w,h) {
    this.w = w;
    this.h = h;
    this.walls = [true, true, true, true];

    this.show = function() {
        var x = this.w*cellBlock;
        var y = this.h*cellBlock;
        stroke(255);
        // noFill();
        // rect(x, y, cellBlock, cellBlock);
        if(this.walls[0]) {
            line(x,y,x+cellBlock,y);
        }
        if(this.walls[1]) {
            line(x+cellBlock,y,x+cellBlock,y+cellBlock);
        }
        if(this.walls[2]) {
            line(x+cellBlock,y+cellBlock,x, y+cellBlock);
        }
        if(this.walls[3]) {
            line(x,y+cellBlock, x, y);
        }
    } 
}