
function Stone(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

Stone.prototype.draw = function(context){
    context.beginPath();
    context.arc(this.x+ cellSize/2, this.y + cellSize/2, 10, 0, Math.PI * 2, false);
    context.closePath();
    context.strokeStyle = "#000";
    context.fillStyle = this.color;

    context.fill();
    context.stroke();
};