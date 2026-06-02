import breakfast1 from "../../../public/images/menu/breakfast1.jpg";
import breakfast2 from "../../../public/images/menu/breakfast2.jpg";
import pasta1 from "../../../public/images/menu/pasta1.jpg";
import pasta2 from "../../../public/images/menu/pasta2.jpg";
import salads from "../../../public/images/menu/salads.jpg";
import soups from "../../../public/images/menu/soups.jpg";
import pizza1 from "../../../public/images/menu/pizza1.jpg";
import pizza2 from "../../../public/images/menu/pizza2.jpg";

export const menu = (t) => {
    return /* html */`
    <div class="menu-page dark-tech-theme">
        <div class="menu-header">
            <h1 class="menu-title">${t('menu_title')}</h1>
            
            <!-- Интерактивный переключатель локаций -->
            <div class="location-switcher">
                <button class="location-btn active" data-location="praha5">Praha 5</button>
                <button class="location-btn" data-location="praha3">Praha 3</button>
            </div>
        </div>

        <div class="menu-container">
            <!-- Пицца (Скрыта по умолчанию, только для Praha 3) -->
            <section class="menu-section fade-in-up pizza-section" id="pizza-section">
                <h2 class="section-title">${t('menu_pizza')}</h2>
                <div class="menu-image-card"><img src="${pizza1}" alt="Pizza 1"></div>
                <div class="menu-image-card"><img src="${pizza2}" alt="Pizza 2"></div>
            </section>

            <!-- Завтраки -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${t('menu_breakfast')}</h2>
                <div class="menu-image-card"><img src="${breakfast1}" alt="Snídaně 1"></div>
                <div class="menu-image-card"><img src="${breakfast2}" alt="Snídaně 2"></div>
            </section>

            <!-- Паста -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${t('menu_pasta')}</h2>
                <div class="menu-image-card"><img src="${pasta1}" alt="Pasta 1"></div>
                <div class="menu-image-card"><img src="${pasta2}" alt="Pasta 2"></div>
            </section>

            <!-- Салаты -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${t('menu_salads')}</h2>
                <div class="menu-image-card"><img src="${salads}" alt="Saláty"></div>
            </section>

            <!-- Супы -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${t('menu_soups')}</h2>
                <div class="menu-image-card"><img src="${soups}" alt="Polévky"></div>
            </section>
        </div>
    </div>
    `;
};