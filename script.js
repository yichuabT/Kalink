const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


document.getElementById('year').textContent = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', function(){
    let currentLocation = window.location.pathname.split('/').pop();

    if(currentLocation === ''){
        currentLocation= 'index.html';
    }

    const navlink = document.querySelectorAll('.nav-link');

    navlink.forEach(link =>{
        let linkHref = link.getAttribute('href');
        if(linkHref === currentLocation){
            link.classList.add('active');
        }
    })
})

const images = document.querySelectorAll('.expandable-img');
const modal = document.getElementById('imagemodal');
const expandedImage = document.getElementById('expandedImage');
const closeModal = document.getElementById('closeModal');

//open image

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        expandedImage.src = image.src;
        expandedImage.alt = image.alt;
    });
    
});

// close using x

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

//close by clicking outside the image

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
});