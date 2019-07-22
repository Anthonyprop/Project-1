// Made and create by Anthony
alert("WELCOME TO ANTHONY PAGE");

var navSlide = function() {
	var burger = document.querySelector(".burger");
	var nav = document.querySelector(".nav-links");
	var navLinks = document.querySelectorAll(".nav-links li");
	

	burger.addEventListener("click", function(){
		// target all the nav
		nav.classList.toggle("nav-active");

		// Animate links
		navLinks.forEach((links, index)=>{
			if(links.style.animation) {
			links.style.animation = ""
			} else {
			links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
		 	}
		});

		// Burger animation
		burger.classList.toggle("toggle");
	
	});

}

navSlide();