const navButton = document.getElementsByClassName('nav-button')[0]

navButton.addEventListener('mouseover',() =>{
    navButton.innerHTML = "X";
})

navButton.addEventListener('mouseleave',() =>{
    navButton.innerHTML = "=";
})