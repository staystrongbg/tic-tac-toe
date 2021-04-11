//Global Variables
var canvas;
var context;

window.onload = function () {
canvas = document.getElementById("canvas"); //finds canvas element
context = canvas.getContext("2d"); //HTML5 Object with many paths for drawing
size = canvas.offsetWidth;
square = Math.floor(size/3);
drawGameGrid();

};

function drawGameGrid () {
//Line 1
context.beginPath();
context.moveTo(square, 0); //defines starting point of line 1
context.lineTo(square, 300); //ending point of line 1
context.stroke();
//Line 2
context.beginPath();
context.moveTo(square _ 2, 0);
context.lineTo(square _ 2, 300);
context.stroke();
//Line 3
context.beginPath();
context.moveTo(0, square);
context.lineTo(300, square);
context.stroke();
//Line 4
context.beginPath();
context.moveTo(0, square*2);
context.lineTo(300, square*2);
context.stroke();
}

check winner
[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];
