
const soilHtml =document.querySelector(".container");
let soilCounter = 0;
let soilbutton = document.createElement("button");
soilHtml.appendChild(soilbutton);
soilbutton.textContent = `soil = ${soilCounter}`;
const pickaxe =document.getElementById("pickaxe");

let stoneCounter = 0;
let stonebutton = document.createElement("button");
soilHtml.appendChild(stonebutton);
stonebutton.textContent = `stone = ${stoneCounter}`;
const shovel =document.getElementById("shovel");
for(let i = 1; i < 4; i++) {
    for(let x = 1; x < 11; x++) {
        //soil
        const imgSoil = document.createElement("img");
        imgSoil.src = "soil1.png";
        imgSoil.className = "soilClass";
        imgSoil.style.width = "100%";
        imgSoil.style.height = "100%";
        imgSoil.style.gridColumn = `${x} / ${x + 1}`;
        imgSoil.style.gridRow = `${i + 4} / ${i + 5}`; // Start from row 5
        soilHtml.appendChild(imgSoil);
        pickaxe.addEventListener("click", () => {
            imgSoil.addEventListener("click", () => {
                imgSoil.remove();
                soilCounter++;
                soilbutton.textContent = `soil = ${soilCounter}`;
            });
        });
        //stone
        const imgStone = document.createElement("img");
        imgStone.src = "ssss.jpg";
        imgStone.className = "stoneClass";
        imgStone.style.width = "100%";
        imgStone.style.height = "100%";
        imgStone.style.gridColumn = `${x} / ${x + 1}`;
        imgStone.style.gridRow = `${i + 7} / ${i + 8}`; // Start from row 8
        soilHtml.appendChild(imgStone);
        shovel.addEventListener("click", () => {
            imgStone.addEventListener("click", () => {
                imgStone.remove();
                stoneCounter++;
                stonebutton.textContent = `stone = ${stoneCounter}`;
            });
        });
    }
}
let grassCounter = 0;
let grassbutton = document.createElement("button");
soilHtml.appendChild(grassbutton);
grassbutton.textContent = `grass = ${grassCounter}`;

const axe =document.getElementById("axe");
document.addEventListener("DOMContentLoaded",()=>{
    soilHtml.addEventListener("click",(event)=>{
        console.log(event.target);
        
        });
});
for(let x = 1; x < 11; x++) {
    //grass
    createGrass(x,4);
}

// grassbutton.addEventListener("click", () => {
//     const gridContainer = document.querySelector(".container");
//     gridContainer.addEventListener("click", (event) => {
//         if (grassCounter > 0) {
//             const gridRect = gridContainer.getBoundingClientRect();
//             const gridColumn = Math.floor((event.clientX - gridRect.left) / (gridRect.width / 10)) + 1; // Assuming 10 columns
//             const gridRow = Math.floor((event.clientY - gridRect.top) / (gridRect.height / 10)) + 1; // Assuming 10 rows
//             if (!isCellOccupied(gridContainer, gridColumn, gridRow)) {
//             createGrass(gridColumn,gridRow );
//             grassCounter--;
//             grassbutton.textContent = `grass = ${grassCounter}`;
//             }
//         }
        
//     });
// });

function isCellOccupied(gridContainer, gridColumn, gridRow) {
    const children = gridContainer.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childColumnStart = parseInt(window.getComputedStyle(child).gridColumnStart);
        const childRowStart = parseInt(window.getComputedStyle(child).gridRowStart);

        if (childColumnStart === gridColumn && childRowStart === gridRow) {
            return true; // The grid cell is already occupied
        }
    }
    return false; // The grid cell is free
}
function createGrass (x ,y){
    const axe =document.getElementById("axe");
    const imgGrass = document.createElement("img");
    imgGrass.src = "grass1.png";
    // imgGrass.className = "grassClass";
    imgGrass.style.width = "100%";
    imgGrass.style.height = "100%";
    imgGrass.style.gridColumn = `${x} / ${x + 1}`;
    imgGrass.style.gridRow = `${y} / ${y + 1}`; 
    soilHtml.appendChild(imgGrass);
    axe.addEventListener("click", () => {
        imgGrass.addEventListener("click", () => {
            imgGrass.remove();
            grassCounter++;
            grassbutton.textContent = `grass = ${grassCounter}`;
        });
    });
}