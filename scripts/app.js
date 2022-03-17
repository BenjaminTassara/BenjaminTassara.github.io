const btnMenu = document.querySelector(".button__ul");
const menu = document.querySelector(".nav__ul");
const menuItem = document.querySelectorAll(".nav__li");
const btnExit = document.querySelector('.fa-times');


btnMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
});


for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener("click", () => {
        menu.classList.toggle("mostrar");
    });
}

btnExit.addEventListener('click', () => {
    menu.classList.remove('mostrar');
});
