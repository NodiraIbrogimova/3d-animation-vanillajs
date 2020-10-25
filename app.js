const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const pillow = document.querySelector('.pillow img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${yAxis}deg) rotate(${xAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
    pillow.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateY(0deg) rotate(0deg)`;
    title.style.transform = 'translateZ(0px)';
    pillow.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});