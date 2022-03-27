const videos = document.querySelectorAll('.video-item');
const modal = document.querySelector('.modal');
const iframe = document.querySelector('.modal-video');
const modalContainer = document.querySelector('.modal__content');
const close = document.querySelector('.btn-close');
const bg = document.querySelector(".modal-bg");

videos.forEach((video) => {
    video.addEventListener("click", () => {
        modal.classList.add("modal-open");
        bg.classList.add("modal-open");
        let yt = video.getAttribute("id") + '?autoplay=1&loop=1';
        iframe.setAttribute("src", yt);
    });
});

const closeModal = () => {
    modal.classList.remove("modal-open");
    iframe.removeAttribute("src");
    bg.classList.remove("modal-open");
}

close.addEventListener("click", closeModal);

document.addEventListener("keydown", e => {
    if(e.key == "Escape"){
        closeModal();
    }
});

