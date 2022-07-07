let grid = document.querySelector('.grid');
let rowFill;
function fillGridRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
    }
    rowFill = document.querySelectorAll('.row');
}

function fillGridColumns(columnNum) {
    for (i = 0; i < rowFill.length; i++) {
        for (j = 0; j < columnNum; j++) {
            let column = document.createElement('div');
            column.classList.add('item');
            rowFill[j].appendChild(column);
        }
    }
    
}

function setGrid() {
    grid.innerHTML = '';
    let selectedSquares = parseFloat(prompt('What width and height for the grid? (One number for both)', '0'));
    if (isNaN(selectedSquares) || selectedSquares > 100) {
        alert('Please enter a number below 100!');
        setGrid();
    } 
    fillGridRows(selectedSquares);
    fillGridColumns(selectedSquares);
    setHover();
}
let button = document.querySelector('.setGrid');
button.addEventListener('click', setGrid);


function setHover() {
    let gridItem = document.querySelectorAll('.item');
    gridItem.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('active');
        })
    })
    gridItem.forEach(gridItem => {
        gridItem.addEventListener('transitionend', () => {
            gridItem.classList.remove('active');
        })
    })
}


