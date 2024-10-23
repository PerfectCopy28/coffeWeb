/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('closeicon');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('right-[0]');
});
closeIcon.addEventListener('click', () => {
	navMenu.classList.toggle('right-[0]');
});
navLink.forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.toggle('right-[0]');
	});
});

/*~~~~~~~~~~~~~~~ STICKY HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/