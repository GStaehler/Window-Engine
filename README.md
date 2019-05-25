# Window Engine

![demo](https://github.com/GStaehler/Window_Engine/blob/master/demo.JPG)

---

Welcome to **Window Engine**. Window Engine helps you start projects that need 
draggable and beautiful custom windows. This project already has three working windows.
All windows have a structure like that :

```html
<div id="mydiv!" class="mydiv" style="display: none;">
	<div id="mydiv!header" class="d-flex justify-content-between mydivheader">
			<p class="windowTitle">Another Window</p>
			<i id="closeButton!" class="far fa-times-circle"></i>
	</div>
	<div class="mainWindow"></div>
</div>
```
*! is the number of the window*

### Add a new window

To add a new window, copy the structure above in your html and change ! (if this is your third window, ! = 3 for example)

You can add another button to open you new window :

```html
<i id="button!"></i>
```

### Third party libraries

The libraries used in **Window Engine** :
- Bootstrap 4.3.1
- jQuery 3.3.1
- FontAwesome 5.7.2