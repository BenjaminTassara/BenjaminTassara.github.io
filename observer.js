const img = document.getElementById('aboutme-img');

const experienceItems = document.querySelectorAll('.card-item')

const chargueImg = (entrie, observer) => {
    entrie.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting); 
    });
}

const chargueExperience = (entrie, observer) => {
    entrie.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting); 
    });
}

const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
}

const observerImg = new IntersectionObserver(chargueImg, options);

const observerExperience = new IntersectionObserver(chargueExperience, options);

observerImg.observe(img);

experienceItems.forEach(experienceItem => {
    observerExperience.observe(experienceItem);
})

