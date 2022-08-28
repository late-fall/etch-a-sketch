const cont = document.querySelector(".container");

let color = "white";

const colorBtn = document.querySelector(".color");
const randomBtn = document.querySelector(".random");
const eraseBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const size = document.querySelector("input");
const grids = document.getElementsByClassName("grid");
let GRID_SIZE = size.value;

//to only draw on mousedown.
let clicked = false;
document.body.onmousedown = function () { clicked = true;}
document.body.onmouseup = function() {clicked = false;}

//when grid size slide bar changed, will create a new grid. 
size.addEventListener('change', (e) => {
    GRID_SIZE = e.target.value;
    createGrid();
})

//function to reset other buttons
function resetBtns () {
    colorBtn.style.backgroundColor = "#F4ABAA";
    randomBtn.style.backgroundColor = "#F4ABAA";
    eraseBtn.style.backgroundColor = "#F4ABAA";
}

colorBtn.addEventListener('click', (e) => {
    color = "black";
    resetBtns();
    e.target.style.backgroundColor = "#EE7879";
})

randomBtn.addEventListener('click', (e) => {
    color = "random";
    resetBtns();
    e.target.style.backgroundColor = "#EE7879";
})

eraseBtn.addEventListener('click', (e) => {
    color = "white";
    resetBtns();
    e.target.style.backgroundColor = "#EE7879";
})

clearBtn.addEventListener('click', (e) => {
    
    for (let i = 0; i < grids.length; i++){
        grids[i].style.backgroundColor = "white";
    }
})

function createGrid(){
    cont.innerHTML = '';
    for (let i = 1; i <= GRID_SIZE; i++){
        const div = document.createElement("div");
        div.classList.add("row" + i);
        cont.appendChild(div);
        const row = document.querySelector(`.row${i}`);
        for (let j = 1; j <= GRID_SIZE; j++){
            const div = document.createElement("div");
            div.classList.add("grid");
            row.appendChild(div);
        }
    }

    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++){
        grids[i].addEventListener('mouseover', (e) => {
            if (!clicked) {
                return;
            }
            e.target.style.backgroundColor = (color === "random") ? "#" + Math.floor(Math.random()*16777215).toString(16) : color;
        });
    }
}

createGrid();