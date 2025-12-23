const treeList = document.getElementById('tree-list');

treeList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'LI' && target.querySelector('ul')) {
        target.classList.toggle('open');
    }
});

const colorTable = document.getElementById('color-table');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

colorTable.addEventListener('click', (event) => {
    const cell = event.target;

    if (cell.tagName === 'TD') {
        cell.style.backgroundColor = getRandomHexColor();
    }
});