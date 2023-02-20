const container = document.getElementById("container");
const reset = document.getElementById("reset");
let grid = 16;
createDivs();

reset.addEventListener('click', () => {
    grid = prompt("How many rows and columns? Min:16, Max:100", 16);
    while (grid < 16 || grid > 100) {
        grid = prompt("How many rows and columns? Min:16, Max:100", 16);
    }
    createDivs();
});

function createDivs() {
    container.textContent = ''; //deletes all DOM elements within an element
    for (let i = 0; i < grid**2; i++) {
        const div = document.createElement('div');
        div.style.height = 35/grid + "rem";
        div.style.width = 35/grid + "rem";
        container.appendChild(div);
    }
}

