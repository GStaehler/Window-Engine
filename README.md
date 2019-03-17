# Window Engine

![demo](demo.jpg)

Welcome to **Window Engine**. Window Engine helps you start projects that need 
draggable and beautiful custom windows. This project already has two working windows.
All windows have a structure like that :

~~~~
<div id="mydiv!" class="mydiv" style="display: none;">
	<div id="mydiv!header" class="d-flex justify-content-between mydivheader">
			<p class="windowTitle">Another Window</p>
			<i id="closeButton!" class="far fa-times-circle"></i>
	</div>
	<div class="mainWindow"></div>
</div>
~~~~
*! is the number of the window*

### Add a new window

To add a new window, copy the structure above in your html and change ! (if this is your third window, ! = 3 for example)
Then, in window_engine.js, copy that code and change ! to match with your window in the html file :

~~~~
var isOut!;

$(document).on("click", "#closeButton!", function () {
	$("#mydiv!").fadeOut(500, "swing");
	isOut! = true;
});

$(document).on("click", "#button!", function () {
	if (isOut!) {
		document.getElementById("mydiv!").style = "position: absolute";
		document.getElementById("mydiv!").style = "top: 80px;";
	}
	isOut! = false;
	$("#mydiv!").fadeIn(500, "swing");
});

dragElement(document.getElementById("mydiv!"));
~~~~

You can add another button to open you new window, like this :

~~~~
<i id="button!">
~~~~

Or like that :

~~~~
<button id="button!"></button>
~~~~