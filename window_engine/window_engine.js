// WINDOW 1 //
windowCreation(1);

// WINDOW 2 //
windowCreation(2);

// WINDOW 3 //
windowCreation(3);

/////////////////////////////////////////////////////////////

function windowCreation(id) {
	var isOut;
	$(document).on("click", "#closeButton" + id, function () {
		$("#mydiv" + id).fadeOut(300, "swing");
		isOut = true;
	});
	$(document).on("click", "#button" + id, function () {
		if (isOut) {
			document.getElementById("mydiv" + id).style = "position: absolute";
			document.getElementById("mydiv" + id).style = "top: 80px;";
		}
		isOut = false;
		$("#mydiv" + id).fadeIn(300, "swing");
	});
	dragElement(document.getElementById("mydiv" + id));
}

function dragElement(elmnt) { // DRAGGABLE WINDOWS
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
