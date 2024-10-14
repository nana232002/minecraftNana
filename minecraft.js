
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

// const axe =document.getElementById("axe");
// document.addEventListener("DOMContentLoaded",()=>{
//     soilHtml.addEventListener("click",(event)=>{
//         console.log(event.target);
        
//         });
// });
for(let x = 1; x < 11; x++) {
    //grass
    createGrass(x,4);
}

function createGrass (x ,y){
    const axe =document.getElementById("axe");
    const imgGrass = document.createElement("img");
    imgGrass.src = "grass1.png";
    imgGrass.className = "grassClass";
    imgGrass.style.width = "100%";
    imgGrass.style.height = "100%";
    imgGrass.style.gridColumn = `${x} / ${x + 1}`;
    imgGrass.style.gridRow = `${y} / ${y + 1}`; 
    soilHtml.appendChild(imgGrass);
}

let selectedItem;
let selectedTool;

pickaxe.addEventListener("click", () => {
    selectedTool="pickaxe";
    selectedItem =undefined;
});
shovel.addEventListener("click", () => {
    selectedTool="shovel";
    selectedItem =undefined;
});
axe.addEventListener("click", () => {
    selectedTool="axe";
    selectedItem =undefined;
    
});

soilbutton.addEventListener("click", () => {
    selectedItem="soilButton";
    selectedTool =undefined;
});
grassbutton.addEventListener("click", () => {
    selectedItem="grassButton";
    selectedTool =undefined;
});
stonebutton.addEventListener("click", () => {
    selectedItem="stoneButton";
    selectedTool =undefined;
});




soilHtml.addEventListener("click", (event) => {
    handleClick(event.target);
    console.log(grassCounter);
    console.log(soilCounter);
    console.log(stoneCounter);
    
    
    
    console.log(selectedTool);
    console.log(event.target);
});


function handleClick(clickedTile) {
if (selectedTool) {
    if (selectedTool === "pickaxe") {
        if(clickedTile.className ==="soilClass"){
            clickedTile.remove();
            soilCounter ++;
            soilbutton.textContent = `soil = ${soilCounter}`;
            
        }
    }
    else if(selectedTool === "axe"){
        
        if(clickedTile.className ==="grassClass"){
            clickedTile.remove();
            grassCounter ++;
            grassbutton.textContent = `grass = ${grassCounter}`;
            
        }

    }
    else if(selectedTool === "shovel"){
        if(clickedTile.className ==="stoneClass"){
            clickedTile.remove();
            stoneCounter ++;
            stonebutton.textContent = `stone = ${stoneCounter}`;
        }

    }
}
else if(selectedItem){
    console.log(selectedItem);
    
    if (selectedItem === "soilButton") {
        if(!(clickedTile.className ==="soilClass" || clickedTile.className ==="grassClass" || clickedTile.className ==="stoneClass")){
            // clickedTile.remove();
            // soilCounter ++;
            // soilbutton.textContent = `soil = ${soilCounter}`;
            // console.log("ok");
            
            
        }
    }
    if (selectedItem === "grassButton") {
        if(!(clickedTile.className ==="soilClass" || clickedTile.className ==="grassClass" || clickedTile.className ==="stoneClass")){
            // createGrass(clickedTile.gridColumn ,clickedTile.gridRow);
            const imgGrass = document.createElement("img");
            imgGrass.src = "grass1.png";
            imgGrass.className = "grassClass";
            imgGrass.style.width = "100%";
            imgGrass.style.height = "100%";
            clickedTile.appendChild(imgGrass);
            // const x=clickedTile.gridColumn;
            // const y=clickedTile.gridRow;
            // console.log(x);
            // console.log(y);
            
            
            // imgGrass.style.gridColumn = `${x} / ${x + 1}`;
            // imgGrass.style.gridRow = `${y} / ${y + 1}`; 
            soilHtml.appendChild(imgGrass);
            console.log("ok");
            
            
        }
    }
}
    


}