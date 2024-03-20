const navBurger = document.querySelector('.nav-burger');
const navLink = document.querySelector('.nav-link');
const logo = document.getElementsByClassName('logo-letter');
const bannerText = document.querySelectorAll('.banner-span');
const langContainer = document.querySelector('.lang-container');


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
    let color_arr = ['#9A031E','#E36414','#FB8B24']
    for (let i = 0; i <= 8; i++ ){
        bannerText[i].addEventListener('mouseover', () =>{
            bannerText[i].style.color = color_arr[0];
            bannerText[i+1].style.color = color_arr[1];
            bannerText[i-1].style.color = color_arr[2];
        })
        bannerText[i].addEventListener('mouseleave', () =>{
            bannerText[i].style.color = 'black';
            bannerText[i+1].style.color = 'black';
            bannerText[i-1].style.color = 'black';
        })
    }
}

const scroll = () => {
    langContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        langContainer.scrollLeft += e.deltaY;
    })
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(()=>{entry.target.classList.add('title-toggle')},60)
        }
        else {
            setTimeout(()=>{entry.target.classList.remove('title-toggle')},60)
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









