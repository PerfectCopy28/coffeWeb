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
const scrollUp = () => {
	const scrollUpBtn = document.getElementById('scroll-up');
	if(this.scrollY >= 250){
		scrollUpBtn.classList.remove('-bottom-1/2');
		scrollUpBtn.classList.add('bottom-4');
	} else{
		scrollUpBtn.classList.add('-bottom-1/2');
		scrollUpBtn.classList.remove('bottom-4');
	}
}

window.addEventListener('scroll', scrollUp);
/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
	const section = document.querySelectorAll('section');
	const navLinks = document.querySelectorAll('.nav-link');

	let target = 'home'
	section.forEach(section => {
		const sectionTop = section.offsetTop;
		if(this.scrollY >= sectionTop - 60){
			target = section.getAttribute('id');
		};
	});
	navLinks.forEach(item => {
		item.classList.remove('active');
		if(item.href.includes(target)){
			item.classList.add('active');
		}
	})
}
window.addEventListener('scroll',activeLink);
