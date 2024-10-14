
const soilHtml =document.querySelector(".container");
let soilCounter = 0;
let soilbutton = document.createElement("button");
soilbutton.className ="button";
soilHtml.appendChild(soilbutton);
soilbutton.textContent = `soil = ${soilCounter}`;
const pickaxe =document.getElementById("pickaxe");

let stoneCounter = 0;
let stonebutton = document.createElement("button");
soilHtml.appendChild(stonebutton);
stonebutton.textContent = `stone = ${stoneCounter}`;
stonebutton.className ="button";
const shovel =document.getElementById("shovel");
for(let i = 1; i < 4; i++) {
    for(let x = 1; x < 11; x++) {
        //soil
        createSoil(x,i+4);
        //stone
        createStone(x,i+7);
    }
}
let grassCounter = 0;
let grassbutton = document.createElement("button");
grassbutton.className ="button";
soilHtml.appendChild(grassbutton);
grassbutton.textContent = `grass = ${grassCounter}`;
for(let x = 1; x < 11; x++) {
    //grass
    createGrass(x,4);
}
function createGrass (x ,y){
    const imgGrass = document.createElement("img");
    imgGrass.src = "grass1.png";
    imgGrass.className = "grassClass";
    imgGrass.style.width = "100%";
    imgGrass.style.height = "100%";
    imgGrass.style.gridColumn = `${x} / ${x + 1}`;
    imgGrass.style.gridRow = `${y} / ${y + 1}`; 
    soilHtml.appendChild(imgGrass);
}
function  createStone(x,y){
    const imgStone = document.createElement("img");
        imgStone.src = "ssss.jpg";
        imgStone.className = "stoneClass";
        imgStone.style.width = "100%";
        imgStone.style.height = "100%";
        imgStone.style.gridColumn = `${x} / ${x + 1}`;
        imgStone.style.gridRow = `${y} / ${y+1}`; // Start from row 8
        soilHtml.appendChild(imgStone);
}
function  createSoil(x,y){
    const imgSoil = document.createElement("img");
        imgSoil.src = "soil1.png";
        imgSoil.className = "soilClass";
        imgSoil.style.width = "100%";
        imgSoil.style.height = "100%";
        imgSoil.style.gridColumn = `${x} / ${x + 1}`;
        imgSoil.style.gridRow = `${y} / ${y+1}`; // Start from row 5
        soilHtml.appendChild(imgSoil);

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
    const container = event.currentTarget;
    const containerRect = container.getBoundingClientRect();
    const x = Math.floor((event.clientX - containerRect.left) / (containerRect.width / 10)) + 1; // Assuming 10 columns
    const y = Math.floor((event.clientY - containerRect.top) / (containerRect.height / 10)) + 1; // Assuming 10 rows
    handleClick(event.target,x,y);
  
});
function handleClick(clickedTile,x,y) {
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
    
    if (selectedItem === "soilButton" & soilCounter>0) {
        if(!(clickedTile.className ==="soilClass" || clickedTile.className ==="grassClass" || clickedTile.className ==="stoneClass"|| clickedTile.className ==="button" )){
            createSoil(x,y);
            soilCounter --;
            soilbutton.textContent = `soil = ${soilCounter}`;

            
            
        }
    }
    else if (selectedItem === "grassButton" & grassCounter>0 ) {
        if(!(clickedTile.className ==="soilClass" || clickedTile.className ==="grassClass" || clickedTile.className ==="stoneClass" || clickedTile.className ==="button" )){
            createGrass(x,y);
            grassCounter --;
            grassbutton.textContent = `grass = ${grassCounter}`;
            
        }
    }
    else if (selectedItem === "stoneButton" & stoneCounter>0) {
        if(!(clickedTile.className ==="soilClass" || clickedTile.className ==="grassClass" || clickedTile.className ==="stoneClass" || clickedTile.className ==="button" )){
            createStone(x,y);
            stoneCounter --;
            stonebutton.textContent = `stone = ${stoneCounter}`;
            
        }
    }
}
}