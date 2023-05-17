const bars = document.querySelector('.bars');
const nav = document.querySelector(".nav");
const icons = document.querySelectorAll("i");

bars.addEventListener("click", function (event) {
    const isVisible = nav.getAttribute('data-visible');
    if(isVisible == "true"){
     nav.setAttribute('data-visible', "false");
     icons[0].setAttribute('data-visible', "true");
     icons[1].setAttribute('data-visible', "false");
 
    } else if (isVisible == "false"){
       nav.setAttribute('data-visible', "true");
       icons[0].setAttribute('data-visible', "false");
       icons[1].setAttribute('data-visible',  "true");
    }
});






