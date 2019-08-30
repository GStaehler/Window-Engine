# Window Engine

[![License: MIT](https://img.shields.io/github/license/GStaehler/Window-Engine.svg?color=brightgreen&label=License)](https://github.com/GStaehler/Window-Engine/blob/master/LICENSE)
[![Version](https://img.shields.io/github/release/GStaehler/Window-Engine.svg?color=Brightgreen&label=Version)](https://github.com/GStaehler/Window-Engine/releases)
[![Donate](https://img.shields.io/badge/Donate-PayPal-Brightgreen.svg)](https://www.paypal.me/GauthierStaehler)
[![GitHub file size in bytes](https://img.shields.io/github/size/GStaehler/Window_Engine/window_engine/window-engine.min.js.svg?color=green&label=window-engine.min.js)](https://github.com/GStaehler/Window-Engine/blob/master/window_engine/window-engine.min.js)
[![GitHub file size in bytes](https://img.shields.io/github/size/GStaehler/Window_Engine/window_engine/window-engine.css.svg?color=green&label=window-engine.css)](https://github.com/GStaehler/Window-Engine/blob/master/window_engine/window-engine.css)

![Demo](https://gstaehler.github.io/window_engine/window.png)

Welcome to **Window Engine**.  Window Engine is a lightweight javascript library, developed by **Gauthier Staehler**, for draggable and beautiful windows. Full demo [here](https://gstaehler.github.io/window.html).

### Installation

[GET Window Engine](https://gstaehler.github.io/get-window-engine/) :

```html
<link rel="stylesheet" href="window_engine/window_engine.css">
<script src="window_engine/window_engine.min.js"></script> // End of your file
```

OR Test it first :

```html
<link rel="stylesheet" href="https://gstaehler.github.io/cdn/window-engine.css">
<script src="https://gstaehler.github.io/cdn/window-engine.min.js"></script> // End of your file
```

### Structure of a window

```html
<div id="mydiv!" class="mydiv">
	<div id="mydiv!header" class="mydivheader color">
		<p class="windowTitle">Title</p>
		<b id="closeButton!">&times;</b>
	</div>
	<div class="mainWindow">Content</div>
</div>
```
*! is the number of the window*

*color is the color of the window : purple, orange, brown, cyan, crimson, green*

*if no color, the window is black*

### Add a new window

To add a new window, copy the structure above in your html and change ! (if this is your third window, ! = 3 for example)

You can add another button to open you new window :

```html
<button id="button!"></button>
```

### windowGroup

All of the windows must be in one windowGroup :

```html
<div class="windowGroup"> Your windows ... </div>
```

### Fade effect

You can add a fade effect on the windows with the class "fade" :

```html
<div id="mydiv!" class="mydiv fade">
```

### Display

If you want your window to be visible without clicking on a button the first time :

```html
<div id="mydiv!" class="mydiv" style="display: initial;">
```

Of course you can combine it with the fade effect :

```html
<div id="mydiv!" class="mydiv fade" style="display: initial;">
```

### Size

You can change the size of the window with "small" and "large" :

```html
<div id="mydiv!" class="mydiv large">
```

**normal** : 800 x 400

**small** : 600 x 300

**large** : 1000 x 500

### Basic Example

```html
<div class="windowGroup">

	<!-- WINDOW 1 -->

	<div id="mydiv1" class="mydiv" style="display: initial;">
		<div id="mydiv1header" class="mydivheader purple">
			<p class="windowTitle">Window Engine</p>
			<b id="closeButton1">&times;</b>
		</div>
		<div class="mainWindow">
			<p>Welcome to Window Engine !</p>
			<p>Window Engine helps you start projects that need draggable and beautiful custom windows.</p>
		</div>
	</div>

	<!-- WINDOW 2 -->

	<div id="mydiv2" class="mydiv fade">
		<div id="mydiv2header" class="mydivheader cyan">
			<p class="windowTitle">Second Window</p>
			<b id="closeButton2">&times;</b>
		</div>
		<div class="mainWindow">
			<p>Cyan</p>
			<p>With fade effect !</p>
		</div>
	</div>

	<!-- WINDOW 3 -->

	<div id="mydiv3" class="mydiv fade small">
		<div id="mydiv3header" class="mydivheader brown">
			<p class="windowTitle">Third Window</p>
			<b id="closeButton3">&times;</b>
		</div>
		<div class="mainWindow">
			<p>Brown</p>
			<p>With fade effect !</p>
		</div>
	</div>
	
</div>

<button id="button1">1</button>
<button id="button2">2</button>
<button id="button3">3</button>
```

### Donation

You can support the project by making a donation !

[![Donate](https://img.shields.io/badge/Donate-PayPal-Brightgreen.svg)](https://www.paypal.me/GauthierStaehler)

Copyright **Gauthier Staehler**