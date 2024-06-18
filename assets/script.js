const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

//  valeurs img
let image = document.querySelector(".banner-img");
console.log(image);
let index = 0
console.log(index);

// valeurs flèches
let leftArrow = document.querySelector(".arrow_left");
console.log(leftArrow);

let rightArrow = document.querySelector(".arrow_right");
console.log(rightArrow);

// valeur .banner p
let tagLine = document.getElementById("tagLine");
console.log(tagLine);

console.log(slides.length);
let lastImg = slides.length -1
let firstImg = 0
console.log(lastImg)
console.log(firstImg)

// image.setAttribute("src", slides[index])
// tagLine.innerHTML = index

// EventListener flèche gauche
leftArrow.addEventListener("click", function() {
if(index === firstImg){
	index = lastImg
}
else {
	index = index - 1
	// ou   index --
}
img.setAttribute("src", slides[index])
// tagLine.innerHTML = index
})

// EventListener flèche droite
rightArrow.addEventListener("click", function() {
if(index === lastImg){
	index = firstImg
}
else {
	index = index + 1
	// ou   index ++
}
img.setAttribute("src", slides[index])
// tagLine.innerHTML = index
})

//boucle + création des .dots &__selected
let slidesize = slides.length;
console.log(slidesize)

for (let i = 0; i < slidesize; i++) {
	let dot = document.createElement("div");
	dot.setAttribute("class", "dot dot_selected");
	// dot.setAttribute("id", i);
	let dotContainer = document.querySelector(".dots");
	dotContainer.appendChild(dot);
	
}







