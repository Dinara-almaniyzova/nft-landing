import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';
import AOS from 'aos';

flsFunctions.isWebp();

const swiper = new Swiper('.auctions-slider', {
	loop: true,  //Включить бесконечный режим
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1' //включаем стрелочки
	},
	modules: [Navigation, FreeMode], //модули которые будут использоваться
	autoHeight: true,
	speed: 500, //скорость прокрутки
	slidesPerView: 2.8, //количество слайдов которые будут видны
	spaceBetween: 42,
	FreeMode: true,
	grabCursor: true,

	breakpoints: {
		// означае что от 1251 пикселей и выше
		990: {
			slidesPerView: 2.5,
		},
		768: {
			slidesPerView: 2.3,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 28,
		},
		0: {
			slidesPerView: 1,
		}
	}
});

// function detectDevice (swip){
// 	if(window.innerWidth<560){
// 		for(let i = 0; i <=3; i++){
// 			document.querySelector('.auctions__item')[i].style.display = 'block';
// 		}
// 	} else{
// 		swiper()
// 	}
// }
// detectDevice(swiper)

const swiper2 = new Swiper('.popular-slider', {
	loop: true,  //Включить бесконечный режим
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2' //включаем стрелочки
	},
	modules: [Navigation, FreeMode], //модули которые будут использоваться
	autoHeight: true,
	speed: 500, //скорость прокрутки
	slidesPerView: 2.8, //количество слайдов которые будут видны
	spaceBetween: 36,
	FreeMode: true,
	grabCursor: true,

	breakpoints: {
		// означае что от 1251 пикселей и выше
		990: {
			slidesPerView: 2.5,
		},
		768: {
			slidesPerView: 2.3,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 28,
		},
		0: {
			slidesPerView: 1,
		}
	}
});

const swiper3 = new Swiper('.categories-slider', {
	loop: true,  //Включить бесконечный режим
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3' //включаем стрелочки
	},
	modules: [Navigation, FreeMode], //модули которые будут использоваться
	autoHeight: true,
	speed: 500, //скорость прокрутки
	slidesPerView: 3.4, //количество слайдов которые будут видны
	spaceBetween: 42,
	FreeMode: true,

	breakpoints: {
		// означае что от 1251 пикселей и выше
		1200: {
			slidesPerView: 3,
		},
		1000: {
			slidesPerView: 2.7,
		},
		770: {
			slidesPerView: 2.3,
			spaceBetween: 28,
		},
		560: {
			slidesPerView: 2,
		}
	}
});

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// const btnBurger = document.querySelectorAll('.header__burger');
// const menuBurger = document.querySelectorAll('mobile-nav');

// btnBurger.addEventListener('click', burger ())

// function burger () {
// 	menuBurger.classList.add('none');
// }