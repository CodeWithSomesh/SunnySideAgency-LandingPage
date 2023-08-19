//Initialize variables
const hamburger = document.querySelector(".hamburger-menu");
const hamburgerEdge = document.querySelector(".hamburger-menu-edge")
const navMenu = document.querySelector(".nav-menu");
const heroImg = document.getElementById("hero-img")
const eggImg = document.getElementById("egg-img")
const cupImg = document.getElementById("cup-img")
const graphicDesignImg = document.getElementById("graphic-design-img")
const photographyImg = document.getElementById("photography-img")
const mlkBottlesImg = document.getElementById("milk-bottles-img")
const orangeImg = document.getElementById("orange-img")
const coneImg = document.getElementById("cone-img")
const sugarCubesImg = document.getElementById("sugar-cubes-img")


// When the hamburger menu is clicked on, the hamburger menu animation will occur and nav-menu will appear
//Adding 'click' event listeners that activates the '.active' CSS of the variables
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburgerEdge.classList.toggle("active");
})

//When one of the nav-links is selected, the hamburger menu should close
//Adding 'click' event listeners that removes the '.active' CSS of the variables 
document.querySelectorAll(".nav-links").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        hamburgerEdge.classList.remove("active");
    })
})
