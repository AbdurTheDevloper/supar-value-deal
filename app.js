let menuIcon = document.getElementById('menu-icon');
let navBar = document.querySelector('.navbar');
navBar.style.right = '-999px'

menuIcon.addEventListener('click', ()=>{
     if(navBar.style.right == '-999px'){
        navBar.style.right = '0px'
     }else{
        navBar.style.right = '-999px'
     }
})
