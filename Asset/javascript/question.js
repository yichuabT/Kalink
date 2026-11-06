const accordion = document.getElementsByClassName('content-container');

for( i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}


document.addEventListener('DOMContentLoaded', function(){
    let currentLocation = window.location.pathname.split('/').pop();

    if(currentLocation === ''){
        currentLocation= 'questions.html';
    }

    const navlink = document.querySelectorAll('.page-number');

    navlink.forEach(link =>{
        let linkHref = link.getAttribute('href');
        if(linkHref === currentLocation){
            link.classList.add('active');
        }
    })
})