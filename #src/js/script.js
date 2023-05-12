const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			if (burgerMenu.classList.contains('active')) {
				document.body.classList.remove('lock');
				burgerMenu.classList.remove('active');
				menuBody.classList.remove('active');
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

const burgerMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
if (burgerMenu) {
	burgerMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		burgerMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

let numSlide = new Swiper('.numbers-slider__body', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});
new Swiper('.reviews__body', {
	slidesPerView: 2.6,
	watchOverflow: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		626: {
			slidesPerView: 1.5,
		},
		812: {
			slidesPerView: 2.1,
		},
		1036: {
			slidesPerView: 2.6,
		}
	}
});


const mapPrompt = document.createElement('div');
mapPrompt.classList.toggle('map__prompt');
mapPrompt.innerText = 'Для активации карты нажмите по ней';
map.appendChild(mapPrompt);
map.onclick = function () {
	this.children[0].removeAttribute('style');
	mapPrompt.classList.remove('mapPrompt');
};
map.onmousemove = function (e) {
	mapPrompt.style.display = 'block';
	if (e.offsetY > 10) {
		mapPrompt.style.top = e.offsetY + 20 + 'px';
	}
	if (e.offsetX > 10) {
		mapPrompt.style.left = e.offsetX + 20 + 'px';
	}
};
map.onmouseleave = function () {
	mapPrompt.style.display = 'none';
};

let select = function () {
	let selectHeader = document.querySelectorAll('.catalog__control-header');
	selectHeader.forEach(item => {
		item.addEventListener('click', function () {
			this.parentElement.classList.toggle('.active');

		})
	})
};

select();




