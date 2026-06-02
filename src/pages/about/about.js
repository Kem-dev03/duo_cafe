import brazilImg from "../../../public/images/about.us/brazil-map-bean.jpg";
import columbiaImg from "../../../public/images/about.us/columbia-ripe-berry.jpg";
import aboutUs from "../../../public/images/about.us/hero.jpg";
import sumatraImg from "../../../public/images/about.us/sumatra.jpg";
import brazilColag from "../../../public/images/about.us/brazil-colag.jpg";
import colombiaColag from "../../../public/images/about.us/colombia-colag.jpg";
import sumatraColag from "../../../public/images/about.us/sumatra-colag.jpg";

export const about = (t) =>  {
    return /*html*/`
    <div class="about_page dark-tech-theme">
        
        <!-- Hero Секция (Главный баннер) -->
        <section class="about-hero" style="background-image: url('${aboutUs}');">
            <div class="hero-overlay"></div>
            <div class="hero-content fade-in-up">
                <h1>${t('about_hero_title') || 'NÁŠ PŘÍBĚH'}</h1>
                <p>${t('about_hero_subtitle') || 'Umění dokonalého šálku začíná zde'}</p>
            </div>
        </section>

        <!-- Секция 1: Бразилия (Текст слева, Картинка справа) -->
        <section class="about-row">
            <div class="about-text fade-in-up">
                <h2>${t('about_brazil_title') || 'BRAZÍLIE: GENETICKÉ DĚDICTVÍ'}</h2>
                <p>${t('about_brazil_text') || 'Chuťový profil tradiční brazilské kávy je nezaměnitelný. Záměrně jsme vybrali tyto ikonické odrůdy pro jejich bohaté tóny čokolády a oříšků. Zasadili jsme je však do sopečné půdy na Sumatře. Tím zachováváme brazilský charakter a obohacujeme jej o hluboký indonéský terroir.'}</p>
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
                <h2>${t('about_columbia_title') || 'KOLUMBIE: UŠLECHTILÁ VŮNĚ'}</h2>
                <p>${t('about_columbia_text') || 'Kolumbijská káva je celosvětově ceněna pro svou zářivou vůni a jemnou ovocnou sladkost. Přenesli jsme tuto výjimečnou genetiku do Indonésie. V našem unikátním mikroklimatu na Sumatře si zachovává svou lehkost, ale získává komplexnější a plnější tělo.'}</p>
            </div>
        </section>
        
        <!-- Секция 3: Индонезия - Суматра (Текст слева, Картинка справа) -->
        <section class="about-row">
            <div class="about-text fade-in-up">
                <h2>${t('about_sumatra_title') || 'INDONÉSIE: NÁŠ DOMOV'}</h2>
                <p>${t('about_sumatra_text') || 'Sumatra je skutečným srdcem DuoCafe. Každé zrno, které pražíme, vyrostlo právě zde. Spojením špičkové genetiky z Brazílie a Kolumbie s úrodnou vulkanickou půdou Indonésie tvoříme naprosto jedinečnou kávu. Tropické podnebí jí dodává zemitou eleganci a dokonalou harmonii.'}</p>
            </div>
            <div class="about-image fade-in-up">
                <img src="${sumatraImg}" alt="Sumatra Coffee Beans">
            </div>
        </section>

        <!-- Intro text for the Collage -->
        <section class="collage-intro fade-in-up">
            <h1>${t('collage_title') || 'KOŘENY VE SVĚTĚ, SRDCE V SUMATŘE.'}</h1>
        </section>

        <!-- Косой Асимметричный Коллаж -->
        <section class="coffee-collage fade-in-up">
            <div class="collage-item left">
                <div class="collage-inner" style="background-image: url('${brazilColag}');"></div>
                <h3>Brazílie<br><span>${t('collage_sub_brazil') || 'DĚDICTVÍ'}</span></h3>
            </div>
            <div class="collage-item center">
                <div class="collage-inner" style="background-image: url('${sumatraColag}');"></div>
                <h3>Sumatra<br><span>${t('collage_sub_sumatra') || 'PŮVOD'}</span></h3>
            </div>
            <div class="collage-item right">
                <div class="collage-inner" style="background-image: url('${colombiaColag}');"></div>
                <h3>Kolumbie<br><span>${t('collage_sub_columbia') || 'CHARAKTER'}</span></h3>
            </div>
        </section>

        <!-- Подпись под коллажем -->
        <section class="collage-caption fade-in-up">
            <p>${t('collage_text') || 'Brazilské a kolumbijské odrůdy, dovedené k dokonalosti na sopečné půdě Indonésie.'}</p>
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
