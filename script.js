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
const scrollHeader = () => {
	const stickyMenu = document.getElementById('sticky-menu');
	if(this.scrollY >= 150){
		stickyMenu.classList.remove('lg:top-[-100%]');
		stickyMenu.classList.add('bg-black/80');
	} else{
		stickyMenu.classList.add('lg:top-[-100%]');
		stickyMenu.classList.remove('bg-black/80');
	}
}
window.addEventListener('scroll', scrollHeader);
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/