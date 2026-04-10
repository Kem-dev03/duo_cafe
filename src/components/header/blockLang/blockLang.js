import { getLanguage } from "../../../i18n";

export const blockLang = () => {
    const currentLang = getLanguage();
    return /*html*/ `
    <div class = "btn_list">
    <button class="btn_lang ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    <button class="btn_lang ${currentLang === 'cz' ? 'active' : ''}" data-lang="cz">CZ</button>
    </div>
    `
}