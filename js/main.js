var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors

var pic = document.querySelector('#main-shoe');
var cyan = document.querySelector('.cyan');
var purple = document.querySelector('.purple');
var blue = document.querySelector('.blue');
var pink = document.querySelector('.pink');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [
	
	{	
		src: "images/products/3.png"
	},
	{
		src: "images/products/2.png"
	},
	{
		src: "images/products/1.png"
	},
	{
		src: "images/products/4.png"
	},
	{
		src: "images/products/5.png"
	},
	{
		src: "images/products/6.png"
	}
]

// Change Color
cyan.addEventListener("click", function() {
	pic.src = info[0].src;
})
purple.addEventListener("click", function() {
	pic.src = info[1].src;
})
blue.addEventListener("click", function() {
	pic.src = info[2].src;
})
pink.addEventListener("click", function() {
	pic.src = info[3].src;
})
green.addEventListener("click", function() {
	pic.src = info[4].src;
})
red.addEventListener("click", function() {
	pic.src = info[5].src;
})

// active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));