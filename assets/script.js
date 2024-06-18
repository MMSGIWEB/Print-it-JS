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

// const bannerImg = document.querySelectorAll(".banner-img");
// const left = document.querySelector(".arrow_left")
// const right = document.querySelector(".arrow_right")

// console.log(bannerImg)
// console.log(left)
// console.log(right)
// // let slideContent = [
// 	"images/slideshow/slide1.png",
// 	"images/slideshow/slide2.png",
// 	"images/slideshow/slide3.png",
// 	"images/slideshow/slide4.png",
// ]
// console.log(slideContent);

//  valeurs img
let index = 0
console.log(index);

console.log(slideContent.length);
let lastimg = slideContent.length -1
let startimg = 0

// valeur imgs html
let img = document.querySelector(".first");
console.log(img);

// let imgs = document.querySelectorAll(".banner-img");
// console.log(imgs);

// valeurs flèches
let left = document.querySelector(".arrow_left");
console.log(left);

let right = document.querySelector(".arrow_right");
console.log(right);

// valeur .banner p
let tagLine = document.querySelector("#banner p");
console.log(tagLine);

console
// EventListener flèche gauche
left.addEventListener("click", function() {
if(index === startimg){
	index = lastimg
}
else {
	index = index - 1
	// ou   index --
}
img.setAttribute("src", slideContent[index])
// tagLine.innerHTML = index
})

// EventListener flèche droite
right.addEventListener("click", function() {
	if(index === lastimg){
		index = startimg
	}
	else {
		index = index + 1
		// ou   index ++
	}
	img.setAttribute("src", slideContent[index])
	// tagLine.innerHTML = index
	})









