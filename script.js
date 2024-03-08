const navBurger = document.querySelector('.nav-burger');
const navLink = document.querySelector('.nav-link');
const logo = document.getElementsByClassName('logo-letter');
const bannerText = document.querySelectorAll('.banner-span');
const navIcon = document.getElementsByClassName('line');
const profileImg = document.querySelector('.profile');
const hello = document.querySelector('.hello');

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
    for (let i = 0; i <= 9; i++ ){
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

const profileToggle = () => {
    profileImg.addEventListener('mouseover',() =>{
        hello.style.backgroundColor = '#FCDC2A';
    })
    profileImg.addEventListener('mouseleave',() =>{
        hello.style.backgroundColor = 'white';
    })
}
profileToggle();
navBar();
logoColor();
banner();









