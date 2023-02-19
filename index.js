burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navlist')
rightNav = document.querySelector('.rightnav')


burger.addEventListner('click',()=>){
    rightnav.classList.toggle('oc');
    navlist.classList.toggle('oc');
    navbar.classList.toggle('h-nav');


}