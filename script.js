// create a div element and iterate 16x16 times
const square = document.createElement('div');
square.style.border = "1px solid black";
square.style.height = "10px";
square.style.width = "10px";

for (let i = 0; i < (16*16); i++)
{
    canvas.appendChild(square.cloneNode(true)); // clone each element since we can only point one at a time
}