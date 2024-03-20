var cnv;
var grid, next;
var pixelSize = 10;
let cols, rows;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < cols; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

function setup() {
    cnv = createCanvas(600, 600);
    cnv.position((windowWidth-width)/2, (windowHeight-height)/2);
    // frameRate(1);
    rows = height / pixelSize;
    cols = width / pixelSize;
    grid = make2DArray(cols, rows);
    grid[10][20] = 1;
}

function draw() {
    background(0);
    stroke(100);
    if (mouseIsPressed) {
        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            grid[floor(mouseX/pixelSize)][floor(mouseY/pixelSize)] = 1;
        }
    }
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            fill(grid[x][y]*255);
            square(x*pixelSize, y*pixelSize, pixelSize);
        }
    }
    next = make2DArray(cols, rows);
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (grid[x][y] == 1) {
                if (grid[x][y+1] === 0 && y < rows-1) {
                    next[x][y] = 0;
                    next[x][y+1] = 1;
                } else {
                    next[x][y] = 1;
                }
            }
        }
    }
    grid = next;
}