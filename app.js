'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent= "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});
const flashLightSwitch = document.querySelector(".button");
flashLightSwitch.addEventListener('click', function() {
    const lightCone = document.getElementById("light");
    if (lightCone.style.visibility === "visible") {
        lightCone.style.visibility = "hidden";
        document.querySelector(".button").style.top="39px";
    } else {
        lightCone.style.visibility = "visible";
        document.querySelector(".button").style.top="41px";
    }
});