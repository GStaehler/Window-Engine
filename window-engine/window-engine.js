/* Window Engine - MIT License - Copyright (c) 2019 Gauthier Staehler */

const metaTag = document.createElement("meta");
metaTag.name = "viewport";
metaTag.content = "user-scalable=0";
document.getElementsByTagName("head")[0].appendChild(metaTag);

const lastWindow = document.getElementsByClassName("windowGroup")[0].lastElementChild.id.substring(6);
const active = document.getElementsByClassName("window");

for (let i = 1; i <= lastWindow; i++) {
    createWindow(i);
}

function createWindow(id) {
    var isOut;
    document.getElementById("closeButton" + id).onclick = function () {
        fadeOut(document.getElementById("window" + id), 50);
        isOut = true;
    };
    document.getElementById("button" + id).onclick = function () {
        if (document.getElementById("window" + id).style.display === "initial") {
            isOut = false;
        }
        if (isOut) {
            document.getElementById("window" + id).style = "position: absolute;";
            document.getElementById("window" + id).style = "top: 80px;";
            fadeIn(document.getElementById("window" + id), 50);
        }
        isOut = false;
    };
    dragElement(document.getElementById("window" + id));
    isOut = true;
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if ("ontouchstart" in document.documentElement) {
        var pos1touch = 0,
            pos2touch = 0,
            pos3touch = 0,
            pos4touch = 0;
    }
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e) {
        if (!"ontouchstart" in document.documentElement) {
            e.preventDefault();
        }
        pos3 = e.clientX;
        pos4 = e.clientY;
        if ("ontouchstart" in document.documentElement) {
            try {
                pos3touch = e.touches[0].clientX;
                pos4touch = e.touches[0].clientY;
            } catch {}
        }
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
        activeWindow();
        document.getElementById(elmnt.id).className += " windowActive";
    }

    function elementDrag(e) {
        e.preventDefault();
        if ("ontouchstart" in document.documentElement) {
            pos1touch = pos3touch - e.touches[0].clientX;
            pos2touch = pos4touch - e.touches[0].clientY;
            pos3touch = e.touches[0].clientX;
            pos4touch = e.touches[0].clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2touch) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1touch) + "px";
        } else {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
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
            for (let i = active.length - 1; i > -1; i--) {
                active[i].classList.remove("windowActive");
            }
            elem.className += " windowActive";
        }, 50);
    } else {
        elem.style.opacity = "0.9";
        activeWindow();
        elem.className += " windowActive";
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
        elem.style.display = "none";
        activeWindow();
        elem.className += " windowActive";
    }
}

function activeWindow() {
    for (let i = active.length - 1; i > -1; i--) {
        active[i].classList.remove("windowActive");
    }
}
