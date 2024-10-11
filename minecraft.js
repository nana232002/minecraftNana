
const soilHtml =document.querySelector(".container");

for(let i=5 ;i<9 ;i++){
    for(let x=1 ;x<11 ;x++){
const imgSoil = document.createElement("img");
imgSoil.src="soil1.png";
imgSoil.className ="soilClass"
imgSoil.style.width="100%";
imgSoil.style.height="100%";
// const soilHtml =document.querySelector(".container");
imgSoil.title = 'Image title';
imgSoil.style.gridColumn ="${x} / ${x + 1}";
// imgSoil.style.gridRow ="${i} / ${i + 1}";
soilHtml.appendChild(imgSoil);
    }
}
