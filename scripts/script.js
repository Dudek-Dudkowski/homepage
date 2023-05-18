const header = document.querySelector('.header');
const applet = document.querySelector('#applet');
const appletCloseButton = document.querySelector('#appletCloseButton');

const navBarItem1 = document.querySelector("#nav-bar-item1");
const navBarItem2 = document.querySelector("#nav-bar-item2");
const navBarItem3 = document.querySelector("#nav-bar-item3");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

header.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
});

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
card1.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})
card2.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})
card3.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
})



appletCloseButton.addEventListener('click', function(){
    applet.classList.remove("shadow-applet-on");
})


console.log(header);