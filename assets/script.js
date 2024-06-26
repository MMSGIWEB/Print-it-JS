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
// console.log(slides)
const slideSize = slides.length;
console.log(slideSize);

//  slide actuelle
let selectedSlide = 0
// console.log(selectedSlide);

//initialisation banner
let img = document.querySelector(".banner-img");
img.setAttribute("src", "./assets/images/slideshow/" + slides[selectedSlide]["image"]); //AKA : cheminement de l'image cible. Cible les images dont le tableau 'slides' a la réf

// console.log(img);

// initialisation .banner p
let tagLine = document.getElementById("tagLine"); //récup de la balise p
tagLine.innerHTML = slides[selectedSlide]["tagLine"]; //cible les tagLine dans le tableau 'slides'

// console.log(tagLine);

//boucle + création des .dots &__selected
for (let i = 0; i < slideSize; i++) {
	if (i === 0) {
		//selected dot
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot dot_selected"); //attribution des classes (.css)
		dot.setAttribute("id", i); // attribution d'un id avec un chiffre en valeur
		let dotContainer = document.querySelector(".dots"); //récup du conteneur .dots
		dotContainer.appendChild(dot); // placement des dots dans le conteneur .dots
	}else{
		//not selected dots
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dot.setAttribute("id", i); // attribution d'un id avec un chiffre en valeur
		let dotContainer = document.querySelector(".dots"); //récup du conteneur .dots
		dotContainer.appendChild(dot); // placement des dots dans le conteneur .dots
	}
	
}

// function & EventListener flèche gauche
const leftArrow = document.querySelector(".arrow_left");
// console.log(leftArrow);

function prevClick() {
	if (selectedSlide === 0) {
		selectedSlide = slideSize - 1; //attribution d'une nouvelle valeur si 'true'
		img.setAttribute("src", "./assets/images/slideshow/" + slides[selectedSlide]["image"]);
		tagLine.innerHTML = slides[selectedSlide]["tagLine"];
		dot = document.getElementById(selectedSlide); //dot cible l'image selectionnée
		dot.classList.add("dot_selected"); //on lui donne la classe attribuée lors de la boucle créée plus haut pour dot(s)
		NotSelected = document.getElementById(0); //ciblage des autres dots
		NotSelected.classList.remove("dot_selected"); //non remplissage des dots pas séléctionnés
	} else {
		selectedSlide--; //attribution d'une nouvelle valeur si 'false'
		img.setAttribute("src", "./assets/images/slideshow/" + slides[selectedSlide]["image"]);
		tagLine.innerHTML = slides[selectedSlide]["tagLine"];
		dot = document.getElementById(selectedSlide);
		dot.classList.add("dot_selected");
		NotSelected = document.getElementById(selectedSlide + 1); //récup des autres dots
		NotSelected.classList.remove("dot_selected"); //non remplissage des dots pas séléctionnés/autres dots pas séléctionnés
	}
}
leftArrow.addEventListener("click", prevClick); //application du EventListener flèche gauche

// Function & EventListener flèche droite
const rightArrow = document.querySelector(".arrow_right");
// console.log(rightArrow);

function nextClick() {
	if (selectedSlide === slideSize - 1) { 
		selectedSlide = 0; //attribution d'une nouvelle valeur si 'true'
		img.setAttribute("src", "./assets/images/slideshow/" + slides[selectedSlide]["image"]);
		tagLine.innerHTML = slides[selectedSlide]["tagLine"];
		dot = document.getElementById(selectedSlide); //dot cible l'image selectionnée
		dot.classList.add("dot_selected"); //on lui donne la classe attribuée lors de la boucle créée plus haut pour dot(s)
		NotSelected = document.getElementById(slideSize - 1);  //ciblage des autres dots
		NotSelected.classList.remove("dot_selected"); //non remplissage des dots pas séléctionnés
	}else {
		selectedSlide++; //attribution d'une nouvelle valeur si 'false'
		img.setAttribute("src", "./assets/images/slideshow/" + slides[selectedSlide]["image"]);
		tagLine.innerHTML = slides[selectedSlide]["tagLine"];
		dot = document.getElementById(selectedSlide);
		dot.classList.add("dot_selected");
		NotSelected = document.getElementById(selectedSlide - 1);  //récup des autres dots
		NotSelected.classList.remove("dot_selected"); //non remplissage des dots pas séléctionnés
	}
}
rightArrow.addEventListener("click", nextClick) //application du EventListener flèche droite