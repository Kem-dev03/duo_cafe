import './contacts.scss';
import bgPraha5 from "../../../public/contacts/contacts1.jpg";
import bgPraha3 from "../../../public/contacts/contacts2.jpg";

export const contacts = (t) => {
    return /* html */`
    <div class="contacts-split-page">
        <!-- Блок Praha 5 -->
        <div class="split-block praha5" style="background: linear-gradient(rgba(18, 20, 22, 0.80), rgba(18, 20, 22, 0.80)), url('${bgPraha5}') center/cover no-repeat;">
            <div class="split-content">
                <h2>PRAHA 5</h2>
                <div class="info-table">
                    <div class="info-row">
                        <span class="label">${t('contact_address_label') || 'ADRESA'}</span>
                        <span class="value">${t('contact_address_p5') || 'Plzeňská 182/179, 150 00 Praha 5-Košíře'}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">${t('contact_hours_label') || 'OTEVÍRACÍ DOBA'}</span>
                        <span class="value">${t('contact_hours_p5_1') || 'Po - Pá: 07:00–20:00'}<br>${t('contact_hours_p5_2') || 'So: 08:00–20:00'}<br>${t('contact_hours_p5_3') || 'Ne: 08:00–15:00'}</span>
                    </div>
                </div>
            </div>
            <div class="split-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=Plzeňská+182/179,+150+00+Praha+5-Košíře" target="_blank" class="btn-neon">${t('btn_navigate') || 'NAVIGOVAT'}</a>
                <a href="tel:+420774315847" class="btn-neon">${t('btn_call') || 'ZAVOLAT'}</a>
            </div>
        </div>

        <!-- Блок Praha 3 -->
        <div class="split-block praha3" style="background: linear-gradient(rgba(18, 20, 22, 0.80), rgba(18, 20, 22, 0.80)), url('${bgPraha3}') center/cover no-repeat;">
            <div class="split-content">
                <h2>PRAHA 3</h2>
                <div class="info-table">
                    <div class="info-row">
                        <span class="label">${t('contact_address_label') || 'ADRESA'}</span>
                        <span class="value">${t('contact_address_p3') || 'Táboritská 16/24, 130 00 Praha 3-Vinohrady'}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">${t('contact_hours_label') || 'OTEVÍRACÍ DOBA'}</span>
                        <span class="value">${t('contact_hours_p3_1') || 'Po: 10:00–11:00'}<br>${t('contact_hours_p3_2') || 'Út - Pá: 07:00–20:00'}<br>${t('contact_hours_p3_3') || 'So: 08:00–20:00'}<br>${t('contact_hours_p3_4') || 'Ne: 10:00–18:00'}</span>
                    </div>
                </div>
            </div>
            <div class="split-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=Táboritská+16/24,+130+00+Praha+3-Vinohrady" target="_blank" class="btn-neon">${t('btn_navigate') || 'NAVIGOVAT'}</a>
                <a href="tel:+420608081434" class="btn-neon">${t('btn_call') || 'ZAVOLAT'}</a>
            </div>
        </div>
    </div>
    `;
};