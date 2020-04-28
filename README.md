# Window Engine

[![License: MIT](https://img.shields.io/github/license/GStaehler/Window-Engine.svg?color=brightgreen&label=License)](https://github.com/GStaehler/Window-Engine/blob/master/LICENSE)
[![Version](https://img.shields.io/github/release/GStaehler/Window-Engine.svg?color=Brightgreen&label=Version)](https://github.com/GStaehler/Window-Engine/releases)
[![Donate](https://img.shields.io/badge/Donate-PayPal-Brightgreen.svg)](https://www.paypal.me/GauthierStaehler)
[![GitHub file size in bytes](https://img.shields.io/github/size/GStaehler/Window_Engine/dist/window-engine.min.js.svg?color=green&label=window-engine.min.js)](https://github.com/GStaehler/Window-Engine/blob/master/dist/window-engine.min.js)
[![GitHub file size in bytes](https://img.shields.io/github/size/GStaehler/Window_Engine/dist/window-engine.min.css.svg?color=green&label=window-engine.min.css)](https://github.com/GStaehler/Window-Engine/blob/master/dist/window-engine.css)
[![CodeFactor](https://www.codefactor.io/repository/github/gstaehler/window-engine/badge)](https://www.codefactor.io/repository/github/gstaehler/window-engine)
[![npm](https://img.shields.io/npm/dw/window-engine)](https://www.npmjs.com/package/window-engine)

![Demo](https://gstaehler.github.io/window_engine/window.png)

Welcome to **Window Engine**.  Window Engine is a lightweight javascript library, developed by **Gauthier Staehler**, for draggable windows. Demo [here](https://gstaehler.github.io/window-engine).

&nbsp;

### Installation

Download ZIP :

```html
<link rel="stylesheet" href="dist/window-engine.min.css">
<script src="dist/window-engine.min.js"></script> // End of your file
```

OR Install with NPM :
```sh
npm i window-engine
```

OR Test it first :

```html
<link rel="stylesheet" href="https://unpkg.com/window-engine@latest/dist/window-engine.min.css">
<script src="https://unpkg.com/window-engine@latest/dist/window-engine.min.js"></script> // End of your file
```

&nbsp;

### Structure of a window

```html
<div id="window!" class="window">
	<div class="color">
		<p class="windowTitle">Title</p>
	</div>
	<div class="mainWindow">Content</div>
</div>
```
**!** *is the number of the window*

**color** *is the color of the window : purple, orange, brown, cyan, crimson, green*

*default color is black*

&nbsp;

### Add a new window

To add a new window, copy the structure above in your html and change **!** (if this is your third window, **!** = 3 for example)

Add another button to open you new window :

```html
<button id="button!"></button>
```

&nbsp;

### windowGroup

All of the windows must be in the same windowGroup :

```html
<div class="windowGroup"> Your windows ... </div>
```

&nbsp;

### Fade effect

Add a fade effect on the windows with the class "fade" :

```html
<div id="window!" class="window fade">
```

&nbsp;

### Display

The following code makes the window visible without a button click :

```html
<div id="window!" class="window" style="display: initial;">
```

Of course it is possible to combine it with the fade effect :

```html
<div id="window!" class="window fade" style="display: initial;">
```

&nbsp;

### Size

Change the size of the window with "small" and "large" :

```html
<div id="window!" class="window large">
```

**normal** : 800 x 400; **small** : 600 x 300; **large** : 1000 x 500

&nbsp;

### Basic Example

```html
<div class="windowGroup">

	<!-- WINDOW 1 -->

	<div id="window1" class="window" style="display: initial;">
		<div class="purple">
			<p class="windowTitle">Window Engine</p>
		</div>
		<div class="mainWindow">
			<p>Welcome to Window Engine !</p>
		</div>
	</div>

	<!-- WINDOW 2 -->

	<div id="window2" class="window fade">
		<div class="cyan">
			<p class="windowTitle">Second Window</p>
		</div>
		<div class="mainWindow">
			<p>Cyan</p>
			<p>With fade effect !</p>
		</div>
	</div>

	<!-- WINDOW 3 -->

	<div id="window3" class="window fade small">
		<div class="brown">
			<p class="windowTitle">Third Window</p>
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

&nbsp;

### They talked about it

[CSS Script](https://www.cssscript.com/draggable-popup-window-engine/)

&nbsp;

Copyright **Gauthier Staehler**