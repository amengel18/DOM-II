// Your code goes here

const navBar = document.querySelector(".nav-link");
navBar.addEventListener('mouseover', event => {
    event.target.style.color = 'purple'
});
navBar.addEventListener('mouseout', event => {
    event.target.style.color = 'pink'
});


let header = document.querySelector('h1')
header.addEventListener ('mouseenter', event => {
    event.target.style.color = 'red'
});
header.addEventListener('mouseleave', event => {
    event.target.style.color = 'green'
});





