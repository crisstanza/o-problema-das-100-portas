var DomUtils = {};

(function() {

	var ONE_SECOND = 1000;

	DomUtils.element = function(id) {
		return document.getElementById(id);
	};

	DomUtils.innerHTML = function(id, content) {
		DomUtils.element(id).innerHTML = content;
	};

	DomUtils.value = function(id, content) {
		DomUtils.element(id).value = content;
	};

	DomUtils.valueTimeouted = function(id, content, timeout) {
		timeout--;
		return setInterval(function() { DomUtils.value(id, content + timeout--); }, ONE_SECOND );
	};

	DomUtils.enable = function(id) {
		DomUtils.element(id).disabled = false;
	};

	DomUtils.disable = function(id) {
		DomUtils.element(id).disabled = true;
	};

	DomUtils.json = function(json) {
		try {
			return eval('('+json+')');
		} catch (exc) {
			alert(exc.message);
			return null;
		}
	};

	DomUtils.addOnClickFromAttribute = function(id, attribute) {
		var element = DomUtils.element(id);
		element.addEventListener('click', function() {
			window.location.href = element.getAttribute(attribute);
		});
	}

	DomUtils.addOnClick = function(id, callback) {
		var element = DomUtils.element(id);
		element.addEventListener('click', callback);
	}

	DomUtils.toggleSrc = function(id, suffix1, suffix2) {
		var img = DomUtils.element(id);
		var src = img.getAttribute('src');
		var newSrc;
		if (Utils.endsWith(src, suffix1)) {
			newSrc = src.replace(suffix1, suffix2);
		} else {
			newSrc = src.replace(suffix2, suffix1);
		}
		img.setAttribute('src', newSrc);
	}

	DomUtils.toggleClass = function(id, className1, className2) {
		var element = DomUtils.element(id);
		if (DomUtils.removeClass(element, className1)) {
			DomUtils.addClass(element, className2);
		} else if (DomUtils.removeClass(element, className2)) {
			DomUtils.addClass(element, className1);
		}
	};

	DomUtils.swapClass = function(id, className1, className2) {
		var element = DomUtils.element(id);
		DomUtils.removeClass(element, className1);
		DomUtils.addClass(element, className2);
	};

	DomUtils.addClass = function(element, className) {
		var classNames = element.getAttribute('class');
		if (classNames != null && classNames != '') {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					return;
				}
			}
			var newClassNames = classNames.trim() + ' ' + className;
			element.setAttribute('class', newClassNames);
		} else {
			element.setAttribute('class', className);	
		}
	};

	DomUtils.removeClass = function(element, className) {
		var classNames = element.getAttribute('class');
		var found = false;
		if (classNames != null) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					classes[i] = '';
					found = true;
					break;
				}
			}
			var newClassNames = classes.join(' ');
			element.setAttribute('class', newClassNames);
		}
		return found;
	};

})();
