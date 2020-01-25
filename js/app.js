window.onscroll = () => toggleNav()

const navigation = document.querySelector(".navigation")
const navbar = document.querySelector("#navbar")
const about = document.querySelector("#about")
const navTop = about.offsetTop

const toggleNav = () => {
    if (window.pageYOffset >= navTop - 25) {
        navbar.classList.add("sticky")
        navigation.setAttribute("style", "visibility: visible")

    } else {
        navbar.classList.remove("sticky")
        navigation.setAttribute("style", "visibility: hidden")
    }
}

function stickyNavigation() { 
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
}

window.addEventListener('scroll', stickyNavigation)

console.log(navbar.offsetParent)
console.log('hi')
