function Cell(row, column) {
    this.row = row;
    this.column = column;
    this.empty = true;
}

Cell.prototype.draw = function (context) {
    context.strokeStyle = "red";
    context.beginPath();
    context.strokeRect(this.row * cellSize, this.column * cellSize, cellSize, cellSize);
    context.stroke();
};