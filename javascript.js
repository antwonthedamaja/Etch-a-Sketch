const container = document.querySelector("#container");
const selection = document.querySelectorAll("input[type=radio]");
const reset = document.querySelector("#reset");
let grid = 16;
let colorMode;
createDivs();

selection.forEach(button => {
    button.addEventListener("click", () => {
        colorMode = button.id;
    });
});

reset.addEventListener('click', () => {
    grid = prompt("How many rows and columns? Min:16, Max:100", 16);
    while (grid < 16 || grid > 100) {
        grid = prompt("How many rows and columns? Min:16, Max:100", 16);
    }
    createDivs();
});

function createDivs() {
    container.textContent = ''; //deletes all DOM elements within the container
    for (let i = 0; i < grid**2; i++) {
        const moreDivs = document.createElement('div');
        moreDivs.style.height = 35/grid + "rem";
        moreDivs.style.width = 35/grid + "rem";
        container.appendChild(moreDivs);
    } 
    const etch = container.querySelectorAll('div');
    let hue = 0;
    etch.forEach(div => {
        div.addEventListener("mouseover", () => {
            if (colorMode === "color") {
                div.style.backgroundColor = picker.value;
            } else if (colorMode === "rainbow") {
                hue += 10;
                div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
            }
        });
    });
}