export const about = (t) =>  {
    return /*html*/`
    <div class="about_page">
        <div class="zoom_png">
            <h1 class="about_title">${t('about_title') || 'About Duo Cafe'}</h1>
            <p class="about_subtitle">${t('about_subtitle') || 'Brewing moments, one cup at a time.'}</p>
        </div>
    </div>
    `
}
