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
    for (i = 0; i < rowFill.length - 1; i++) {
        for (j = 0; j < columnNum; j++) {
            let column = document.createElement('div');
            column.classList.add('item');
            rowFill[j].appendChild(column);
        }
    }
    
}
fillGridRows(16);
fillGridColumns(16);

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

