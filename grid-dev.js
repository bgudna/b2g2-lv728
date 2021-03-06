var cols, rows;
var cellBlock = 40;
var grid = [];

var currentCell;

function setup() {
    createCanvas(600, 450);
    
    cols = floor(width/cellBlock);
    rows = floor(height/cellBlock);

    background(25,31,49);

    for (x = 0; x < rows; x++) {
        for (y = 0; y < cols; y++) {
            var cell = new Cell(x, y);
            grid.push(cell);
        }    
    }

    currentCell = grid[5];
}

function draw() {
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }

    currentCell.visited = true;

}

function Cell(w,h) {
    this.w = w;
    this.h = h;
    this.walls = [true, true, true, true];
    this.visited = false;

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

        if(this.visited) {
            fill(255,234,55);
            rect(x, y, cellBlock, cellBlock);
        }
    } 
}