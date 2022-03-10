const btnMenu = document.querySelector(".nav__responsive-ul");

const menu = document.querySelector(".nav__ul");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
    const menus = this.nextElementSibling;
    const height = menus.scrollHeight;
    menus.style.height = height + "px";
})