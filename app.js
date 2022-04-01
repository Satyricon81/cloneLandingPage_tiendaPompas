let nav = document.querySelector("#nav");
let logo = document.getElementById("logo");
let btnjs = document.querySelectorAll(".btnjs");
let cardjs = document.querySelectorAll(".cardjs");


document.addEventListener('scroll', () => {
    //Operador ternario
    if(window.scrollY > 150) {
        nav.classList.add('scrollNav');
        logo.classList.add('scrollLogo');       
    } else {
        nav.classList.remove('scrollNav');
        logo.classList.remove('scrollLogo');
    }

    //(window.scrollY > 150) ? nav.classList.add('scrollNav'): nav.classList.remove('scrollNav');
    //(window.scrollY > 150) ? logo.classList.add('scrollLogo'): logo.classList.remove('scrollLogo');
});


function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < btnjs.length; i++) {
        let alturabtnjs = btnjs[i].offsetTop;
        if(alturabtnjs - 750 < scrollTop) {
            btnjs[i].style.opacity = 1;
            btnjs[i].classList.add("mostrarIzda");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

function scrollCards() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < cardjs.length; i++) {
        let alturacardjs = cardjs[i].offsetTop;
        if(alturacardjs - 650 < scrollTop) {
            cardjs[i].style.opacity = 1;
            cardjs[i].classList.add("mostrarcards");
        }
    }
}

window.addEventListener('scroll', scrollCards);



