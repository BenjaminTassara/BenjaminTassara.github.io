const nav = document.querySelector('.content__header');

const addBackground = () => {
    let scrolls =document.documentElement.scrollTop;
    
    if(scrolls > 50){
        nav.classList.add('background')
    }
    else nav.classList.remove('background');
}

window.addEventListener('scroll', addBackground);

