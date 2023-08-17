//Initialize variables
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");


// When the hamburger menu is clicked on, the hamburger menu animation will occur and nav-menu will appear
//Adding 'click' event listeners that activates the '.active' CSS of the variables
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//When one of the nav-links is selected, the hamburger menu should close
//Adding 'click' event listeners that removes the '.active' CSS of the variables 
document.querySelectorAll(".nav-links").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })
})