//active header
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const header = document.getElementById('header');

window.onload = checkScrollHeader();
window.addEventListener('scroll', checkScrollHeader);

function checkScrollHeader(){
    if(document.documentElement.scrollTop > 0 ){
        header.classList.add('header_active');
    } else {
        if(!menu.classList.contains('active-vertical')){
            header.classList.remove('header_active');
        }
    }
}


//bars menu
menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(menu.classList.contains('active-vertical')){
        menu.classList.remove('active-vertical');
        menuList.classList.remove('list_menu');
        menuList.classList.add('list_horizontal');
        if(header.classList.contains('header_active') && document.documentElement.scrollTop === 0){
            header.classList.remove('header_active');
        }
    } else {
        menu.classList.add('active-vertical');
        menuList.classList.add('list_menu');
        menuList.classList.remove('list_horizontal');
        if(!header.classList.contains('header_active')){
            header.classList.add('header_active');
        }
    }
}


//up button
const upButton = document.getElementById('upButton');

window.onload = checkUpButton();
window.addEventListener('scroll', checkUpButton);

function checkUpButton(){
    if(document.documentElement.scrollTop > window.innerHeight){
        upButton.classList.add('up-button_active');
    } else {
        upButton.classList.remove('up-button_active');
    }
}