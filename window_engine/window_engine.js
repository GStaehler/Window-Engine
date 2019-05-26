for (i = 1; i < 1000; i++) {
	try {
		windowCreation(i);
	} catch (err) {}
}

function windowCreation(id) {
	var isOut;
	document.getElementById("closeButton" + id).onclick = function () {
		fadeOut(document.getElementById("mydiv" + id), 300);
		isOut = true;
	};
	document.getElementById("button" + id).onclick = function () {
		if (document.getElementById("mydiv" + id).style.display === "initial") {
			isOut = false;
		}
		if (isOut) {
			document.getElementById("mydiv" + id).style = "position: absolute;";
			document.getElementById("mydiv" + id).style = "top: 80px;";
			fadeIn(document.getElementById("mydiv" + id), 300);
		}
		isOut = false;
	};
	dragElement(document.getElementById("mydiv" + id));
	isOut = true;
}

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
	elem.style.filter = "alpha(opacity=0)";
	elem.style.display = "inline-block";
	elem.style.visibility = "visible";

	if (ms) {
		var opacity = 0;
		var timer = setInterval(function () {
			opacity += 50 / ms;
			if (opacity >= 1) {
				clearInterval(timer);
				opacity = 0.9;
			}
			elem.style.opacity = opacity;
			elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
			var active = document.getElementsByClassName("mydiv");
			for (var i = active.length - 1; i > -1; i--) {
				active[i].classList.remove("mydivActive");
			}
			elem.className += " mydivActive";
		}, 50);
	} else {
		elem.style.opacity = 1;
		elem.style.filter = "alpha(opacity=1)";
	}
}

function fadeOut(elem, ms) {
	if (ms) {
		var opacity = 1;
		var timer = setInterval(function () {
			opacity -= 50 / ms;
			if (opacity <= 0) {
				clearInterval(timer);
				opacity = 0;
				elem.style.display = "none";
				elem.style.visibility = "hidden";
			}
			elem.style.opacity = opacity;
			elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
		}, 50);
	} else {
		elem.style.opacity = 0;
		elem.style.filter = "alpha(opacity=0)";
		elem.style.display = "none";
		elem.style.visibility = "hidden";
	}
}
