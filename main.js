const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")


navToggle.addEventListener("click" , function(){
    links.classList.toggle("show-links");
});

//classList looks for all the css class 
//toggle toggles the selected class 