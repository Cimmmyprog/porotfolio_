//nabar fix 
window.onscroll = function(){
const headr = document.querySelector('header');
const navbarfix = headr.offsetTop


if(window.pageYOffset > navbarfix){
    headr.classList.add('navbar-fix');
}else{
    headr.classList.remove('navbar-fix');
}

}


// hanberger 
const hamberger = document.querySelector('#hamberger');
const navmenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click',function(){
    hamberger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});