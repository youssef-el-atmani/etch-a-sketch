"use strict";

const boxesContainer = document.querySelector('#boxesContainer');
const wideBoxesHolder = [];

const resizingBtn = document.querySelector('.resize');
resizingBtn.addEventListener('click',resizeGrid);

let gridSize = 0;

function resizeGrid(){
    // remove the current wideBoxes from DOM
    for(let i = 0; i < wideBoxesHolder.length; i++){
        boxesContainer.removeChild(wideBoxesHolder[i]);
    }

    // Free Up the wideBoxesHolder array
    while(wideBoxesHolder.length > 0){
        wideBoxesHolder.pop();
    }

    gridSize = getNewGridSize();

    createGrid(gridSize);
    
}

function getNewGridSize(){
    let newGridSize = 0;
    newGridSize = +prompt("Enter your new Grid size:\nyour number should be an Integer that is greater than 0, and less or equal to 100")
    while((newGridSize <= 0) || (newGridSize > 100) || (Number.isInteger(newGridSize) === false))
        {
            newGridSize = +prompt('Invalid number, your number should be an Integer that is greater than 0 and less or equal to 100');
        }
    return newGridSize;
}

function getGridSizeAndDrawIt(){
    let gridSize = +prompt("Change the grid size:\n Your number should fall in ]0, 100] interval");
    while((gridSize <= 0) || (gridSize > 100) || (Number.isInteger(gridSize) === false))
    {
        gridSize = +prompt('Invalid number, your number should be an Integer that is greater than 0 and less or equal to 100');
    }
    alert(`Your grid size: ${gridSize}`);
    createGrid(gridSize);
}

function createGrid(gridSize)
{
    for(let i = 0; i < gridSize; i++){
        const wideBox = document.createElement('div');
        wideBox.classList.add('wide-box');
        for (let j = 0; j < gridSize; j++){
            const tinyBox = document.createElement('div');
            tinyBox.classList.add('tiny-box');
            wideBox.appendChild(tinyBox);
        }
        wideBoxesHolder.push(wideBox);

    }

    for(let i = 0; i < gridSize; i++){
        boxesContainer.appendChild(wideBoxesHolder[i]);
    }
}

createGrid(16);

boxesContainer.addEventListener('mouseover', paintBox);

function paintBox(event){
    let targetBox = event.target;
    targetBox.classList.add('paint');
}