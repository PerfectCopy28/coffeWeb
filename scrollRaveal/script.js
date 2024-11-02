const sr = ScrollReveal({
	origin: 'left',
  reset : true,
	distance : '80px',
	duration : 2000,
	delay : 200
});

sr.reveal(`.home__img, .about__img, .quality_img`,{origin: 'bottom', scale: 0.5, delay:700});
sr.reveal(`.home__txt h1, .about__txt h2, .about__txt, .fragrance_left, .left_side, .products_left img`,{origin: 'left',interval: 500});
sr.reveal(`.about__btn, .variety__txt p, .variety__txt img, .products_left button, .product_item`,{origin: 'bottom',interval: 700});
sr.reveal(`.variety__txt h3, .fragrance_top, .products_top`,{origin: 'top',interval: 700});
sr.reveal(`.fragrance_right, .right_side, .products_left`,{origin: 'right',interval: 500});