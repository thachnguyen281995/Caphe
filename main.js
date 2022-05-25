/*=============== LOADER ===============*/


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const header = document.getElementById('header')
const $$ =document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)


if(navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
navLink.forEach(function(item){
    item.addEventListener('click',function(){
        navMenu.classList.remove('show-menu')
    })
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset
    if(scrollHeight>50){
        header.classList.add('scroll-header')
    }
    else{
        header.classList.remove('scroll-header')
    }
})

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});
/* Default filter products */ 
mixerProducts.filter('.delicacies')
const linkProducts = $$('.products__item')
function activeProduct(){
    linkProducts.forEach(e => e.classList.remove('active-product'));
    this.classList.add('active-product')
}
linkProducts.forEach(e => e.addEventListener('click',activeProduct))

/* Link active products */ 

/*=============== SHOW SCROLL UP ===============*/ 
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

