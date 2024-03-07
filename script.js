const navBurger = document.getElementsByClassName('nav-burger')[0]
const navLink = document.getElementsByClassName('nav-link')[0]
const logo = document.getElementsByClassName('logo-letter')

navBurger.addEventListener('click',()=>{
    navLink.classList.toggle('enable');
})

color_arr =['#FA7070','#FFB38E','#FF8E8F','#E178C5','#F7418F','#FC819E','#FEC7B4','#FF8080','#E6A4B4','#EC7272']
for(let i  = 0; i < 10; i++ ){
    logo[i].addEventListener('mouseover', () =>{
        logo[i].style.fontSize = '33px';
        logo[i].style.color = color_arr[i];
    })
    logo[i].addEventListener('mouseleave', () =>{
        logo[i].style.fontSize = '23px';
        logo[i].style.color = 'black';
    })
}