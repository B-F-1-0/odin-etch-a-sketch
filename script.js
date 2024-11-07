// create a div element and iterate 16x16 times
const square = document.createElement('div');
square.className = "colorsquare";
square.style.border = "1px solid black";
square.style.height = "32px";
square.style.width = "32px";
square.style.backgroundColor = 'transparent';

function colorSquare(target)
{
    target.style.backgroundColor = 'black';
    console.log("hover detected and square colored successfully");
}

for (let i = 0; i < (16*16); i++)
{
    canvas.appendChild(square.cloneNode(true)); // clone each element since we can only point one at a time
}

let menu = document.querySelector('#menu');

canvas.addEventListener('mouseover', (event) => {
    let target = event.target;

    switch(target.className) {
        case 'colorsquare':
            colorSquare(target);
            break;
    }
});

// canvas change button
const canvaschangebtn = document.querySelector("#canvaschange");
canvaschangebtn.addEventListener("click", () => {
    while (true)
    {
        let size = prompt("How many squares per row? (2 minimum, 100 maximum)");
        
        if (size === null)
        {
            break; // cancel
        }
        else if (!(size>=2 & size<=100))
        {
            alert("Invalid size.");
        }
        else
        {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.lastChild);
              }
            for (let i = 0; i < (size*size); i++)
            {
                // specify new square
                let squaresize = 544/size;
                squaresize -= 2;
                square.style.width = squaresize + "px";
                square.style.height = squaresize + "px";
                canvas.appendChild(square.cloneNode(true)); // clone each element since we can only point one at a time
            }
            break;
        }
    }

});