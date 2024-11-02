// create a div element and iterate 16x16 times
const square = document.createElement('div');
square.className = "colorsquare";
square.style.border = "1px solid black";
square.style.height = "16px";
square.style.width = "16px";
square.style.backgroundColor = 'transparent';

square.addEventListener("mouseover", () => {
    square.style.backgroundColor = 'black';
});

for (let i = 0; i < (16*16); i++)
{
    canvas.appendChild(square.cloneNode(true)); // clone each element since we can only point one at a time
}