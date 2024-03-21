const navBurger = document.querySelector('.nav-burger');
const navLink = document.querySelector('.nav-link');
const logo = document.getElementsByClassName('logo-letter');

const langContainer = document.querySelector('.lang-container');
const navIcon = document.querySelectorAll('.line');
const introText = document.querySelector('.intro-line');

const intersectionObs = document.querySelectorAll('.title-hidden');

const navBar = () => {
    navBurger.addEventListener('click',()=>{
        navLink.classList.remove('nav-link-hidden');
        navLink.classList.toggle('nav-link-toggle');
        navIcon[0].classList.toggle('nav-burger-toggle');
        navIcon[1].classList.toggle('nav-burger-toggle-1');
        navIcon[2].classList.toggle('nav-burger-toggle-2');
    })
    
    navLink.addEventListener('mouseleave',()=>{
        navLink.classList.add('nav-link-hidden');
        navLink.classList.remove('nav-link-toggle');
        navIcon[0].classList.remove('nav-burger-toggle');
        navIcon[1].classList.remove('nav-burger-toggle-1');
        navIcon[2].classList.remove('nav-burger-toggle-2');
    })
}

const banner = () =>{
    setInterval(()=>{
        introText.classList.toggle('intro-toggle');
    }, 1000)
}

const scroll = () => {
    langContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        langContainer.scrollLeft += e.deltaY;
    })
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            setTimeout(()=>{entry.target.classList.add('title-toggle')},70)
        }
        else {
            setTimeout(()=>{entry.target.classList.remove('title-toggle')},70)
        }
    })
})

const runObserver = () => {
    for (let i = 0; i < intersectionObs.length; i++) {
        const elements = intersectionObs[i];
        observer.observe(elements);
    } 
}

navBar();
banner();
runObserver();
scroll();









