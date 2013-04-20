var cellNumber = 19;
var cellSize = 30;
var boardWidth = 1 + (cellNumber * cellSize);
var boardHeight = 1 + (cellNumber * cellSize);
var canvas = document.getElementById("canvas");
canvas.width = boardWidth + cellSize;
canvas.height = boardHeight + cellSize;
var context = canvas.getContext("2d");
var cells = [];  //массив ячеек на поле
var request;

(function init() {
    drawBoard();
    newGame();
    canvas.addEventListener("click", boardOnClick, false);
//    drawCell(); // debug

}())




function drawBoard() {

    context.clearRect(0, 0, boardWidth, boardHeight);

    context.beginPath();

    // vertical
    for (var x = 15; x <= boardWidth; x += cellSize) {
        context.moveTo(0.5 + x, 0);
        context.lineTo(0.5 + x, boardHeight);
    }

    // horizontal
    for (var y = 15; y <= boardHeight; y += cellSize) {
        context.moveTo(0, 0.5 + y);
        context.lineTo(boardWidth, 0.5 + y);
    }
    context.strokeStyle = "#ccc";
    context.stroke();

}


function newGame() {
    for (var x = 0; x < cellNumber; x++) {
        for (var y = 0; y < cellNumber; y++) {
            cells.push(new Cell(x, y));
        }
    }
    //console.log(cells);
}


function boardOnClick(event) {
    var cell = getCursorPosition(event);
    // найдем ячейку, куда попали
    for (var i = 0, leng = cells.length; i < leng; i++) {
        if ((cells[i].row === cell.row) && (cells[i].column === cell.column)) {
            clickOnCell(i);
            return;
        }
    }
}

function getCursorPosition(event) {

    // получить координаты и размеры холста
    var bb = canvas.getBoundingClientRect();

    var x = (event.clientX - bb.left) * (canvas.width / bb.width);
    var y = (event.clientY - bb.top) * (canvas.height / bb.height);


    // вернуть ячейку в которую кликнули
    var cell = new Cell(Math.floor(x / cellSize), Math.floor(y / cellSize));
    return cell;

}


// для дебага
function drawCell() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].draw(context);
    }
}

function clickOnCell(i) {
    if (cells[i].empty) {
        var x = cells[i].row * cellSize ,
            y = cells[i].column * cellSize;
        cells[i].stone = new Stone(x, y, "black");
        cells[i].stone.draw(context);
        cells[i].empty = false;
    }
}
//Каждый камень должен иметь хотя бы одно дамэ (точку свободы)
// — соседний по вертикали или горизонтали (но не по диагонали!) незанятый пункт.
function isDame(){

}