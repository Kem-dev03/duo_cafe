import './page404.scss';

export const page404 = (t) => {
    return /* html */`
    <div class="not-found-page dark-tech-theme">
        <div class="not-found__container">
            
            <h1 class="not-found__404">404</h1>
            
            <!-- CSS Анимация: Парящая чашка с паром -->
            <div class="not-found__cup-wrapper">
                <div class="steam s1"></div>
                <div class="steam s2"></div>
                <div class="steam s3"></div>
                <div class="cup"></div>
            </div>

            <div class="not-found__text">
                <h2>${t('not_found_title') || 'PAGE NOT FOUND'}</h2>
                <p>${t('not_found_desc') || 'Looks like this page spilled away.'}</p>
                <a href="/" class="btn-return">
                    <span>${t('not_found_btn') || 'RETURN HOME'}</span>
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </div>
    `;
};