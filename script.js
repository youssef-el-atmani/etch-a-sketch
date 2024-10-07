"use strict";

const boxesContainer = document.querySelector('.boxesContainer');
const wideBoxesHolder = [];

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