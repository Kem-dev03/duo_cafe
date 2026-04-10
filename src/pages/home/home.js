import coffeeImg from './coffee2.png';


export const home = (t) =>  {
    
    setTimeout(() => {
        const aboutText = document.querySelector('.about_text');
        if (aboutText) {
            observer.observe(aboutText);
        }
    }, 100);
        setTimeout(() => {
        const reviewsSection = document.querySelector('.reviews');
        if (reviewsSection) {
            reviewObserver.observe(reviewsSection);
        }
    }, 100);

    return /*html*/ `
<div class="home">
        <div class="home1"> 
            <img src="${coffeeImg}" alt="Coffee">
        </div>        
        <div class="span1">
            <b>${t('perfect_brew')}</b>
        </div>
        <div class="span2"><b>
            ${t('cozy_corner')}</b> 
        </div>
        <ul class="blocks">
            <li class="block1"></li>
            <li class="block2"></li>
            <li class="block3"></li>
            <li class="block4"></li>
            <li class="block5"></li>
            <li class="block6"></li>
        </ul>
        </div>
        <p class="info_text"><b>${t('info_text')}</b></p>
        <div class="info">
        </div>
        <div class="about_text">
            ${t('about_text')}
        </div>
        <div>
            <div class="reviews_title">${t('reviews')}</div>
            <ul class="reviews">      
                <li class="rev1"></li>
                <li class="rev2"></li>
                <li class="rev3"></li>
                <li class="rev4"></li>
            </ul> 
        </div>

    `
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    })
})

const reviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            reviewObserver.unobserve(entry.target);
        }
    })
}, { 
    threshold: 0.3,
    rootMargin: "0px 0px -250px 0px" 
})