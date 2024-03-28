let left = document.querySelector(".left")
let right = document.querySelector(".right")
let slider = document.querySelector(".slider")
const intersectionObs = document.querySelectorAll('.transitioning');

let pContainer = document.querySelector(".projects-container")
let navbar = document.querySelector(".navbar")


let width = slider.offsetWidth
let index = 0
window.addEventListener("resize", function () {
    width = project.offsetWidth;
});

right.addEventListener("click", function () {
    index = 1;
    pContainer.style.transform = `translateX(-${index * width}px)`;
});

left.addEventListener("click", function () {
    index = 0;
    pContainer.style.transform = `translateX(-${index * width}px)`;
});

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            setTimeout(()=>{entry.target.classList.add('transitioned')},70)
        }
        else {
            setTimeout(()=>{entry.target.classList.remove('transitioned')},70)
        }
    })
})

const runObserver = () => {
    for (let i = 0; i < intersectionObs.length; i++) {
        const elements = intersectionObs[i];
        observer.observe(elements);
    } 
}

runObserver()