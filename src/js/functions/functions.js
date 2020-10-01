// var ua = window.navigator.userAgent;
// var msie = ua.indexOf("MSIE ");
// var isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows()
// 		);
// 	},
// };
// function isIE() {
// 	ua = navigator.userAgent;
// 	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
// 	return is_ie;
// }
// if (isIE()) {
// 	document.querySelector("body").classList.add("ie");
// }
// if (isMobile.any()) {
// 	document.querySelector("body").classList.add("_touch");
// }

// function testWebP(callback) {
// 	var webP = new Image();
// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2);
// 	};
// 	webP.src =
// 		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// testWebP(function (support) {
// 	if (support == true) {
// 		document.querySelector("body").classList.add("_webp");
// 	} else {
// 		document.querySelector("body").classList.add("_no-webp");
// 	}
// });

// function ibg() {
// 	if (isIE()) {
// 		let ibg = document.querySelectorAll("._ibg");
// 		for (var i = 0; i < ibg.length; i++) {
// 			if (
// 				ibg[i].querySelector("img") &&
// 				ibg[i].querySelector("img").getAttribute("src") != null
// 			) {
// 				ibg[i].style.backgroundImage =
// 					"url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
// 			}
// 		}
// 	}
// }
// ibg();

// if (document.querySelector(".wrapper")) {
// 	document.querySelector(".wrapper").classList.add("_loaded");
// }

// let unlock = true;

//=================
// //ActionsOnHash
// if (location.hash) {
//   const hsh = location.hash.replace("#", "");
//   if (document.querySelector(".popup_" + hsh)) {
//     popup_open(hsh);
//   } else if (document.querySelector("div." + hsh)) {
//     _goto(document.querySelector("." + hsh), 500, "");
//   }
// }
//=================





//Spollers
// let spollers = document.querySelectorAll("._spoller");
// if (spollers.length > 0) {
// 	for (let index = 0; index < spollers.length; index++) {
// 		const spoller = spollers[index];
// 		spoller.addEventListener("click", function (e) {
// 			if (
// 				spoller.classList.contains("_spoller-992") &&
// 				window.innerWidth > 992
// 			) {
// 				return false;
// 			}
// 			if (
// 				spoller.classList.contains("_spoller-768") &&
// 				window.innerWidth > 768
// 			) {
// 				return false;
// 			}
// 			if (spoller.closest("._spollers").classList.contains("_one")) {
// 				let curent_spollers = spoller
// 					.closest("._spollers")
// 					.querySelectorAll("._spoller");
// 				for (let i = 0; i < curent_spollers.length; i++) {
// 					let el = curent_spollers[i];
// 					if (el != spoller) {
// 						el.classList.remove("_active");
// 						_slideUp(el.nextElementSibling);
// 					}
// 				}
// 			}
// 			spoller.classList.toggle("_active");
// 			_slideToggle(spoller.nextElementSibling);
// 		});
// 	}
// }
//=================

//SearchInList
// function search_in_list(input) {
// 	let ul = input.parentNode.querySelector("ul");
// 	let li = ul.querySelectorAll("li");
// 	let filter = input.value.toUpperCase();

// 	for (i = 0; i < li.length; i++) {
// 		let el = li[i];
// 		let item = el;
// 		txtValue = item.textContent || item.innerText;
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 			el.style.display = "";
// 		} else {
// 			el.style.display = "none";
// 		}
// 	}
// }
//=================


// //SlideToggle
// let _slideUp = (target, duration = 500) => {
// 	target.style.transitionProperty = "height, margin, padding";
// 	target.style.transitionDuration = duration + "ms";
// 	target.style.height = target.offsetHeight + "px";
// 	target.offsetHeight;
// 	target.style.overflow = "hidden";
// 	target.style.height = 0;
// 	target.style.paddingTop = 0;
// 	target.style.paddingBottom = 0;
// 	target.style.marginTop = 0;
// 	target.style.marginBottom = 0;
// 	window.setTimeout(() => {
// 		target.style.display = "none";
// 		target.style.removeProperty("height");
// 		target.style.removeProperty("padding-top");
// 		target.style.removeProperty("padding-bottom");
// 		target.style.removeProperty("margin-top");
// 		target.style.removeProperty("margin-bottom");
// 		target.style.removeProperty("overflow");
// 		target.style.removeProperty("transition-duration");
// 		target.style.removeProperty("transition-property");
// 		target.classList.remove("_slide");
// 	}, duration);
// };
// let _slideDown = (target, duration = 500) => {
// 	target.style.removeProperty("display");
// 	let display = window.getComputedStyle(target).display;
// 	if (display === "none") display = "block";

// 	target.style.display = display;
// 	let height = target.offsetHeight;
// 	target.style.overflow = "hidden";
// 	target.style.height = 0;
// 	target.style.paddingTop = 0;
// 	target.style.paddingBottom = 0;
// 	target.style.marginTop = 0;
// 	target.style.marginBottom = 0;
// 	target.offsetHeight;
// 	target.style.transitionProperty = "height, margin, padding";
// 	target.style.transitionDuration = duration + "ms";
// 	target.style.height = height + "px";
// 	target.style.removeProperty("padding-top");
// 	target.style.removeProperty("padding-bottom");
// 	target.style.removeProperty("margin-top");
// 	target.style.removeProperty("margin-bottom");
// 	window.setTimeout(() => {
// 		target.style.removeProperty("height");
// 		target.style.removeProperty("overflow");
// 		target.style.removeProperty("transition-duration");
// 		target.style.removeProperty("transition-property");
// 		target.classList.remove("_slide");
// 	}, duration);
// };
// let _slideToggle = (target, duration = 500) => {
// 	if (!target.classList.contains("_slide")) {
// 		target.classList.add("_slide");
// 		if (window.getComputedStyle(target).display === "none") {
// 			return _slideDown(target, duration);
// 		} else {
// 			return _slideUp(target, duration);
// 		}
// 	}
// };
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return el.offsetParent === null;
}
//========================================


//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// var sticky = new Sticky(".selector", {});
//Select

// active class of menu items onscroll
window.addEventListener("scroll", () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll(".section-full").forEach((el, i) => {
			if (
				el.offsetTop - document.querySelector(".nav").clientHeight <=
				scrollDistance
			) {
				document.querySelectorAll(".nav a").forEach((el) => {
					if (el.classList.contains("is-active")) {
						el.classList.remove("is-active");
					}
				});

				document
					.querySelectorAll(".nav li")
				[i].querySelector("a")
					.classList.add("is-active");
			}
		});
	}
});
// function _goto(target_block, speed, offset = 0) {
// 	let header = "";
// 	// OffsetHeader
// 	if (window.innerWidth < 992) {
// 		header = 'header';
// 	}
// 	let options = {
// 		speedAsDuration: true,
// 		speed: speed,
// 		header: header,
// 		offset: offset,
// 		easing: "easeOutQuad",
// 	};
// 	// let scr = new SmoothScroll();
// 	// scr.animateScroll(target_block, "", options);
// }

document.querySelectorAll('a[href^="#"').forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();

		let href = this.getAttribute("href").substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = document.querySelector(".nav").offsetHeight;
		// const topOffset = 0; // если не нужен отступ сверху
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: "smooth",
		});
	});
});
let scr_body = document.querySelector("body");
let scr_blocks = document.querySelectorAll("._scr-sector");
let scr_items = document.querySelectorAll("._scr-item");
let scr_fix_block = document.querySelectorAll("._side-wrapper");
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

//ScrollOnClick (Navigation)
let link = document.querySelectorAll("._goto-block");
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute("href").replace("#", "");
		if (block_name != "" && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener("click", function (e) {
			if (document.querySelector(".menu__body._active")) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute("href").replace("#", "");
			let target_block = document.querySelector("." + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}

window.addEventListener("scroll", function (el) {
	let old_current_link = document.querySelectorAll("._goto-block._active");
	if (old_current_link) {
		for (let index = 0; index < old_current_link.length; index++) {
			let el = old_current_link[index];
			el.classList.remove("_active");
		}
	}
	for (let index = 0; index < blocks.length; index++) {
		let block = blocks[index];
		let block_item = document.querySelector("." + block);
		if (block_item) {
			let block_offset = offset(block_item).top;
			let block_height = block_item.offsetHeight;
			if (
				pageYOffset > block_offset - window.innerHeight / 3 &&
				pageYOffset < block_offset + block_height - window.innerHeight / 3
			) {
				let current_links = document.querySelectorAll(
					'._goto-block[href="#' + block + '"]'
				);
				for (let index = 0; index < current_links.length; index++) {
					let current_link = current_links[index];
					current_link.classList.add("_active");
				}
			}
		}
	}
});
// //Placeholers
// let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
// inputs_init(inputs);

// function inputs_init(inputs) {
// 	if (inputs.length > 0) {
// 		for (let index = 0; index < inputs.length; index++) {
// 			const input = inputs[index];
// 			const input_g_value = input.getAttribute('data-value');
// 			input_placeholder_add(input);
// 			if (input.value != '' && input.value != input_g_value) {
// 				input_focus_add(input);
// 			}
// 			input.addEventListener('focus', function (e) {
// 				if (input.value == input_g_value) {
// 					input_focus_add(input);
// 					input.value = '';
// 				}
// 				if (input.getAttribute('data-type') === "pass") {
// 					input.setAttribute('type', 'password');
// 				}
// 				if (input.classList.contains('_date')) {

// 					input.classList.add('_mask');
// 					Inputmask("99.99.9999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);

// 				}
// 				if (input.classList.contains('_phone')) {
// 					//'+7(999) 999 9999'
// 					//'+38(999) 999 9999'
// 					//'+375(99)999-99-99'
// 					input.classList.add('_mask');
// 					Inputmask("+375 (99) 9999999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 				}
// 				if (input.classList.contains('_digital')) {
// 					input.classList.add('_mask');
// 					Inputmask("9{1,}", {
// 						"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 				}
// 				form_remove_error(input);
// 			});
// 			input.addEventListener('blur', function (e) {
// 				if (input.value == '') {
// 					input.value = input_g_value;
// 					input_focus_remove(input);
// 					if (input.classList.contains('_mask')) {
// 						input_clear_mask(input, input_g_value);
// 					}
// 					if (input.getAttribute('data-type') === "pass") {
// 						input.setAttribute('type', 'text');
// 					}
// 				}
// 			});
// 			if (input.classList.contains('_date')) {
// 				datepicker(input, {
// 					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
// 					customMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
// 					overlayPlaceholder: 'Введите год',
// 					overlayButton: 'Вперед!',
// 					id: 1,
// 					id: 2,
// 					formatter: (input, date, instance) => {
// 						const value = date.toLocaleDateString()
// 						input.value = value
// 					},
// 					onSelect: function (input, instance, date) {
// 						input_focus_add(input.el);
// 					}

// 				});
// 			}
// 		}
// 	}
// }
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// pickmeup.defaults.locales['ru'] = {
// 	days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
// 	daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
// 	daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
// 	months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
// 	monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
// };
// pickmeup('.date', {
// 	format: 'Y-m-d',
// 	locale: 'ru',
// 	mode: 'range',
// 	hide_on_select: true,
// 	prev: '<img src="img/icons/dp-right.svg" alt="" />',
// 	next: '<img src="img/icons/dp-left.svg" alt="" />'

// });

// function email_test(input) {
// 	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }
