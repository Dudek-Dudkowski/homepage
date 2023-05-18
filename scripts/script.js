const header = document.querySelector('#header');
const applet = document.querySelector('#applet');
const appletCloseButton = document.querySelector('#appletCloseButton');

const navBarItem1 = document.querySelector("#nav-bar-item1");
const navBarItem2 = document.querySelector("#nav-bar-item2");
const navBarItem3 = document.querySelector("#nav-bar-item3");

const cardIcon1 = document.querySelector(".icon1");
const cardIcon2 = document.querySelector(".icon2");
const cardIcon3 = document.querySelector(".icon3");


// Site under construction nav bar items
navBarItem1.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})
navBarItem2.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})
navBarItem3.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})

// Site under construction cards
cardIcon1.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})
cardIcon2.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})
cardIcon3.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})


//Closing "under construction applet"
appletCloseButton.addEventListener('click', function(){
    applet.classList.remove("shadow-applet-on");
})


console.log(header);