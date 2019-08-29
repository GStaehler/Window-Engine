// exposed API

function attachWindow(id) {
  var windowElement = document.getElementById(id)
	var closeButtonElement = windowElement.querySelector('.closeButton')
	closeButtonElement.addEventListener('click', () => closeWindow(id))
  dragElement(windowElement); // should be something like addDragListeners
}

function openWindow(id) {
  var windowElement = document.getElementById(id)
  windowElement.style = "position: absolute;";
  windowElement.style = "top: 80px;";
	fadeIn(windowElement, 50);
}

function closeWindow(id) {
  var windowElement = document.getElementById(id)
  fadeOut(windowElement, 50);
}

function toggleWindow(id) {
	var windowElement = document.getElementById(id)
	var isOpen = windowElement.style.display === 'initial' 
	if (isOpen) {
		closeWindow(id)
	} else {
		openWindow(id)
	}
}

// private services

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
		var active = document.getElementsByClassName("mydiv");
		for (var i = active.length - 1; i > -1; i--) {
			active[i].classList.remove("mydivActive");
		}
		document.getElementById(elmnt.id).className += " mydivActive";
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function fadeIn(elem, ms) {
	elem.style.opacity = 0;
	elem.style.display = "initial";
	if (elem.classList.contains("fade")) {
		var opacity = 0;
		var timer = setInterval(function () {
			opacity += 10 / ms;
			if (opacity >= 1) {
				clearInterval(timer);
				opacity = 0.9;
			}
			elem.style.opacity = opacity;
			var active = document.getElementsByClassName("mydiv");
			for (var i = active.length - 1; i > -1; i--) {
				active[i].classList.remove("mydivActive");
			}
			elem.className += " mydivActive";
		}, 50);
	} else {
		elem.style.opacity = 0.9;
		var active = document.getElementsByClassName("mydiv");
		for (var i = active.length - 1; i > -1; i--) {
			active[i].classList.remove("mydivActive");
		}
		elem.className += " mydivActive";
	}
}

function fadeOut(elem, ms) {
	if (elem.classList.contains("fade")) {
		var opacity = 1;
		var timer = setInterval(function () {
			opacity -= 10 / ms;
			if (opacity <= 0) {
				clearInterval(timer);
				opacity = 0;
				elem.style.display = "none";
			}
			elem.style.opacity = opacity;
		}, 50);
	} else {
		elem.style.opacity = 0;
		elem.style.display = "none";
		var active = document.getElementsByClassName("mydiv");
		for (var i = active.length - 1; i > -1; i--) {
			active[i].classList.remove("mydivActive");
		}
		elem.className += " mydivActive";
	}
}
