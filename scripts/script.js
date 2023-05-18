const header = document.querySelector('.header');
const applet = document.querySelector('#applet');
const appletCloseButton = document.querySelector('#appletCloseButton');


header.addEventListener('click', function(){
    applet.classList.add("shadow-applet-on");
});


appletCloseButton.addEventListener('click', function(){
    applet.classList.remove("shadow-applet-on");
})



// searchInput.addEventListener("blur", function () {
// 	searchInput.value = "Szukaj";
// });

console.log(header);