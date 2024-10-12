
const soilHtml =document.querySelector(".container");
const equb =document.querySelector(".equb");
let soilCounter = 0;
let soilbutton = document.createElement("button");
soilHtml.appendChild(soilbutton);
soilbutton.textContent = `grass = ${soilCounterCounter}`;

let stoneCounter = 0;
let stonebutton = document.createElement("button");
soilHtml.appendChild(stonebutton);
stonebutton.textContent = `grass = ${stoneCounter}`;

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
        //stone
        const imgStone = document.createElement("img");
        imgStone.src = "ssss.jpg";
        imgStone.className = "stoneClass";
        imgStone.style.width = "100%";
        imgStone.style.height = "100%";
        imgStone.style.gridColumn = `${x} / ${x + 1}`;
        imgStone.style.gridRow = `${i + 7} / ${i + 8}`; // Start from row 8
        soilHtml.appendChild(imgStone);
    }
}
let grassCounter = 0;
let grassbutton = document.createElement("button");
soilHtml.appendChild(grassbutton);
grassbutton.textContent = `grass = ${grassCounter}`;

const axe =document.getElementById("axe");

for(let x = 1; x < 11; x++) {
    //grass
    const imgGrass = document.createElement("img");
    imgGrass.src = "grass1.png";
    // imgGrass.className = "grassClass";
    imgGrass.style.width = "100%";
    imgGrass.style.height = "100%";
    imgGrass.style.gridColumn = `${x} / ${x + 1}`;
    imgGrass.style.gridRow = `4 / 5`; 
    soilHtml.appendChild(imgGrass);
    axe.addEventListener("click", () => {
        imgGrass.addEventListener("click", () => {
            imgGrass.remove();
            grassCounter++;
            grassbutton.textContent = `grass = ${grassCounter}`;
        });
    });
}
