import brazilImg from "../../../public/images/about.us/brazil-map-bean.jpg";
import columbiaImg from "../../../public/images/about.us/columbia-ripe-berry.jpg";
import aboutUs from "../../../public/images/about.us/hero.jpg";

export const about = (t) =>  {
    return /*html*/`
    <div class="about_page dark-tech-theme">
        
        <!-- Hero Секция (Главный баннер) -->
        <section class="about-hero" style="background-image: url('${aboutUs}');">
            <div class="hero-overlay"></div>
            <div class="hero-content fade-in-up">
                <h1>${t('about_hero_title')}</h1>
                <p>${t('about_hero_subtitle')}</p>
            </div>
        </section>

        <!-- Секция 1: Бразилия (Текст слева, Картинка справа) -->
        <section class="about-row">
            <div class="about-text fade-in-up">
                <h2>${t('about_brazil_title')}</h2>
                <p>${t('about_brazil_text')}</p>
            </div>
            <div class="about-image fade-in-up">
                <img src="${brazilImg}" alt="Brazil Coffee Beans">
            </div>
        </section>

        <!-- Секция 2: Колумбия (Картинка слева, Текст справа) -->
        <section class="about-row reverse">
            <div class="about-image fade-in-up">
                <img src="${columbiaImg}" alt="Colombia Ripe Berry">
            </div>
            <div class="about-text fade-in-up">
                <h2>${t('about_columbia_title')}</h2>
                <p>${t('about_columbia_text')}</p>
            </div>
        </section>

        <!-- Секция 3: DuoCafe v числах -->
        <section class="about-numbers-section fade-in-up">
            <h2 class="numbers-title">${t('about_numbers_title')}</h2>
            
            <div class="numbers-grid">
                <!-- Квадраты -->
                <div class="number-card"><h3>${t('about_num1_val')}</h3><p>${t('about_num1_text')}</p></div>
                <div class="number-card"><h3>${t('about_num2_val')}</h3><p>${t('about_num2_text')}</p></div>
                <div class="number-card"><h3>${t('about_num3_val')}</h3><p>${t('about_num3_text')}</p></div>
                <div class="number-card"><h3>${t('about_num4_val')}</h3><p>${t('about_num4_text')}</p></div>
            </div>
        </section>

    </div>
    `
}
