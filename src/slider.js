const slider = document.querySelector('.swiper-container');

export var mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3,
		},
		520:{
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		}
	},
	
})