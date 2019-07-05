/*  Если дословно переводить — «устранение дребезга». 
            Такой декоратор позволяет превратить несколько вызовов функции в течение определенного времени в один вызов,
            причем задержка начинает заново отсчитываться с каждой новой попыткой вызова. */

function debounce(func, delay) {
	let inDebounce = undefined;
	return function() {
		let context = this,
			args = arguments;
		clearTimeout(inDebounce);
		return (inDebounce = setTimeout(function() {
			return func.apply(context, args);
		}, delay));
	};
}


/* Данный декоратор позволяет «затормозить» функцию — функция будет выполняться не чаще одного раза в указанный период,
   даже если она будет вызвана много раз в течение этого периода. 
   Т.е. все промежуточные вызовы будут игнорироваться. */
// Throttle гарантирует, что функция вызывается только один раз каждые X (limit) миллисекунд
function throttle(func, limit) {
	let inThrottle = undefined;
	return function() {
		let args = arguments,
			context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			return setTimeout(function() {
				return (inThrottle = false);
			}, limit);
		}
	};
}



// АЛЬТЕРНАТИВА jq closest
function getParents(elem, selector) {
	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}
	// Setup parents array
	var parents = [];

	// Get matching parent elements
	for (; elem && elem !== document; elem = elem.parentNode) {
		// Add matching parents to array
		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
		} else {
			parents.push(elem);
		}
	}
	return parents;
}

//  РАНДОМНОЕ ID
var ID = function() {
	return (
		"_" +
		Math.random()
			.toString(36)
			.substr(2, 9)
	);
};

// ПРОВЕРКА НА МОБИЛЬНЫЕ УСТРОЙСТВА
function isMobile() {
	let isMobile = document.body.clientWidth <= 1024 ? true : false;
	return isMobile;
}

// ПРОВЕРКА НА ПЛАНШЕТ
function isTablet() {
	let isTablet = document.body.clientWidth <= 1280 ? true : false;
	return isTablet;
}