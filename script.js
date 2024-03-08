const navBurger = document.querySelector('.nav-burger');
const navLink = document.querySelector('.nav-link');
const logo = document.getElementsByClassName('logo-letter');
const bannerText = document.querySelectorAll('.banner-span');
const navIcon = document.getElementsByClassName('line');

const eduImg = document.querySelectorAll('.edu-img');
const eduText = document.querySelectorAll('.edu-text-hidden');

const intersectionObs = document.querySelectorAll('.title-hidden');

const navBar = () => {
    navBurger.addEventListener('click',()=>{
        navLink.classList.toggle('toggle');   
        navLink.classList.remove('hidden');
        navIcon[0].classList.toggle('nav-burger-toggle');
        navIcon[1].classList.toggle('nav-burger-toggle-1');
        navIcon[2].classList.toggle('nav-burger-toggle-2');
    })
    
    navLink.addEventListener('mouseleave',()=>{
        navLink.classList.add('hidden');
        navLink.classList.remove('toggle'); 
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

const edu = () =>{
    for (let i = 0; i <= 2; i++ ){
        eduImg[i].addEventListener('mouseover', () =>{
            eduText[i].style.top = "-20%";
        })
        eduImg[i].addEventListener('mouseleave', () =>{
            eduText[i].style.top = "20%";
        })
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('title-toggle')
        }
        else {
            entry.target.classList.remove('title-toggle')
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
edu();
runObserver();









