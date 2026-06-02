var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=(e,t)=>`
    <main class="main">
    ${e(t)}
    </main>
    `,u=()=>`
    <footer class="footer">
        <div class="footer__watermark">COFFEE</div>
        
        <div class="footer__container">
            <div class="footer__top">
                
                <div class="footer__brand">
                    <h2 class="footer__logo">DuoCafe</h2>
                    <p class="footer__tagline">Elevating your daily ritual.<br>One cup at a time.</p>
                    <div class="footer__socials">
                        <a href="https://www.instagram.com/duocafes?igsh=eTNweTFhMGpmbmox" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/share/1BMoy3uwRh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div class="footer__nav">
                    <a href="/" class="footer__link">Home</a>
                    <a href="/menu" class="footer__link">Menu</a>
                    <a href="/contacts" class="footer__link">Contacts</a>
                </div>
                
                <div class="footer__info">
                    <div class="footer__info-block">
                        <h4>Location</h4>
                        <p>Plzeňská <br>182/179</p>
                    </div>
                    <div class="footer__info-block">
                        <h4>Hours</h4>
                        <p>Mon-Fri: 7am - 8pm<br>Sat-Sun: 8am - 8pm</p>
                    </div>
                </div>
            </div>
            
            <div class="footer__bottom">
                <p>Made with Love and Caffeine.</p>
            </div>
        </div>
    </footer>
    `,d={en:{nav_home:`Home`,nav_about:`Abot Us`,nav_contact:`Contacts`,nav_menu:`Menu`,perfect_brew:`perfect brew <br> urban taste`,cozy_corner:`Your cozy corner for coffee and deserts`,about_text:`At DuoCafe, we serve only <span> 100% Specialty Arabica </span> <span><br> hand-picked </span> from high-altitude plantations in Ethiopia and Brazil.<br> Each bean undergoes careful artisan roasting to reveal a unique flavor profile:<br> from subtle floral notes to a rich chocolate finish.<br> We control every stage – from grind adjustment to the <span>perfect serving temperature </span> of your cup.`,info_text:`Our quality standard`,reviews:`Words from our visitors`,about_hero_title:`OUR STORY`,about_hero_subtitle:`The art of the perfect cup starts here`,about_brazil_title:`BRAZILIAN HERITAGE`,about_brazil_text:`The rich, chocolatey profiles of classic Brazilian coffee are beloved worldwide. We specifically select traditional Brazilian coffee varieties for their exceptional character. However, rather than sourcing from South America, we carefully cultivate these heritage trees on our dedicated plantations in Sumatra. This allows us to preserve the iconic Brazilian taste while enriching it with the unique terroir of the Indonesian highlands.`,about_columbia_title:`COLOMBIAN LINEAGE`,about_columbia_text:`Renowned for their vibrant aroma and subtle fruity sweetness, Colombian coffee varieties represent some of the finest genetics in the coffee world. We brought these exceptional seedlings to the heart of Indonesia. Planted in our Sumatran soil, they retain their signature brightness while developing a deeper, more complex body that can only be achieved in this unique microclimate.`,about_sumatra_title:`OUR HOME: SUMATRA`,about_sumatra_text:`Sumatra is the true heart of DuoCafe. Every single coffee bean we roast is grown right here, nurtured in the lush, volcanic earth of the Indonesian mountains. By taking world-class varieties from Brazil and Colombia and cultivating them in Sumatran soil, we create a truly unique cup. The tropical climate and high altitudes impart a deep, earthy elegance to the beans, resulting in a perfect harmony of global coffee heritage and passionate Indonesian craftsmanship.`,about_numbers_title:`DUOCAFE IN NUMBERS`,about_num1_val:`5+`,about_num1_text:`Direct contracts with farmers`,about_num2_val:`100%`,about_num2_text:`Specialty Arabica`,about_num3_val:`12`,about_num3_text:`Professional baristas`,about_num4_val:`10k+`,about_num4_text:`Perfect cups a month`,not_found_title:`OOPS! PAGE NOT FOUND`,not_found_desc:`Looks like this page spilled away. Let's get you back to our delicious coffee.`,not_found_btn:`RETURN HOME`,menu_title:`MENU`,menu_breakfast:`BREAKFAST`,menu_coffee:`COFFEE`,menu_desserts:`DESSERTS`,menu_drinks:`DRINKS`,menu_pasta:`PASTA`,menu_salads:`SALADS`,menu_soups:`SOUPS`,menu_pizza:`PIZZA`,contact_title:`CONTACTS`,contact_address_p5:`Plzeňská 182/179, 150 00 Prague 5-Košíře`,contact_hours_p5_1:`Mon - Fri: 07:00–20:00`,contact_hours_p5_2:`Sat: 08:00–20:00`,contact_hours_p5_3:`Sun: 08:00–15:00`,contact_address_p3:`Táboritská 16/24, 130 00 Prague 3-Vinohrady`,contact_hours_p3_1:`Mon: 10:00–11:00`,contact_hours_p3_2:`Tue - Fri: 07:00–20:00`,contact_hours_p3_3:`Sat: 08:00–20:00`,contact_hours_p3_4:`Sun: 10:00–18:00`,btn_navigate:`NAVIGATE`,btn_instagram:`INSTAGRAM`,btn_call:`CALL`,contact_address_label:`ADDRESS`,contact_hours_label:`OPENING HOURS`,collage_sub_brazil:`THE ROOTS`,collage_sub_columbia:`THE SOUL`,collage_sub_sumatra:`THE CULT`,collage_title:`ROOTS IN THE WORLD, HEART IN SUMATRA.`,collage_text:`Brazilian and Colombian varieties, brought to perfection on the volcanic soil of Indonesia.`},cz:{nav_home:`Domů`,nav_about:`O nás`,nav_contact:`Kontakt`,nav_menu:`Menu`,perfect_brew:`dokonalý zápar <br> městská chuť`,cozy_corner:`Váš útulný koutek pro kávu a dezerty`,about_text:`V DuoCafe připravujeme výhradně <span> 100% výběrovou Arabiku </span> <span><br> ručně sbíranou </span> na vysokohorských plantážích v Etiopii a Brazílii.<br> Každé zrno prochází šetrným řemeslným pražením, které odhaluje unikátní chuťový profil:<br>  od jemných květinových tónů až po bohatou čokoládovou dochuť.<br> Kontrolujeme každý krok – od nastavení mletí až po <span>ideální teplotu </span> servírování vašeho šálku.`,info_text:`Naš standard kvality`,reviews:`Co říkají naši hosté`,about_hero_title:`NÁŠ PŘÍBĚH`,about_hero_subtitle:`Umění dokonalého šálku začíná zde`,about_brazil_title:`BRAZÍLIE: GENETICKÉ DĚDICTVÍ`,about_brazil_text:`Chuťový profil tradiční brazilské kávy je nezaměnitelný. Záměrně jsme vybrali tyto ikonické odrůdy pro jejich bohaté tóny čokolády a oříšků. Zasadili jsme je však do sopečné půdy na Sumatře. Tím zachováváme brazilský charakter a obohacujeme jej o hluboký indonéský terroir.`,about_columbia_title:`KOLUMBIE: UŠLECHTILÁ VŮNĚ`,about_columbia_text:`Kolumbijská káva je celosvětově ceněna pro svou zářivou vůni a jemnou ovocnou sladkost. Přenesli jsme tuto výjimečnou genetiku do Indonésie. V našem unikátním mikroklimatu na Sumatře si zachovává svou lehkost, ale získává komplexnější a plnější tělo.`,about_sumatra_title:`INDONÉSIE: NÁŠ DOMOV`,about_sumatra_text:`Sumatra je skutečným srdcem DuoCafe. Každé zrno, které pražíme, vyrostlo právě zde. Spojením špičkové genetiky z Brazílie a Kolumbie s úrodnou vulkanickou půdou Indonésie tvoříme naprosto jedinečnou kávu. Tropické podnebí jí dodává zemitou eleganci a dokonalou harmonii.`,about_numbers_title:`DUOCAFE V ČÍSLECH`,about_num1_val:`5+`,about_num1_text:`Přímých smluv s farmáři`,about_num2_val:`100%`,about_num2_text:`Výběrová Arabika`,about_num3_val:`12`,about_num3_text:`Profesionálních baristů`,about_num4_val:`10k+`,about_num4_text:`Dokonalých šálků měsíčně`,not_found_title:`JEJDA! STRÁNKA NENALEZENA`,not_found_desc:`Zdá se, že se tato stránka někam rozlila. Pojďme vás vrátit k naší výborné kávě.`,not_found_btn:`NÁVRAT DOMŮ`,menu_title:`MENU`,menu_breakfast:`SNÍDANĚ`,menu_coffee:`KÁVA`,menu_desserts:`DEZERTY`,menu_drinks:`NÁPOJE`,menu_pasta:`PASTA`,menu_salads:`SALÁTY`,menu_soups:`POLÉVKY`,menu_pizza:`PIZZA`,contact_title:`KONTAKTY`,contact_address_p5:`Plzeňská 182/179, 150 00 Praha 5-Košíře`,contact_hours_p5_1:`Po - Pá: 07:00–20:00`,contact_hours_p5_2:`So: 08:00–20:00`,contact_hours_p5_3:`Ne: 08:00–15:00`,contact_address_p3:`Táboritská 16/24, 130 00 Praha 3-Vinohrady`,contact_hours_p3_1:`Po: 10:00–11:00`,contact_hours_p3_2:`Út - Pá: 07:00–20:00`,contact_hours_p3_3:`So: 08:00–20:00`,contact_hours_p3_4:`Ne: 10:00–18:00`,btn_navigate:`NAVIGOVAT`,btn_instagram:`INSTAGRAM`,btn_call:`ZAVOLAT`,contact_address_label:`ADRESA`,contact_hours_label:`OTEVÍRACÍ DOBA`,collage_title:`KOŘENY VE SVĚTĚ, SRDCE V SUMATŘE.`,collage_text:`Brazilské a kolumbijské odrůdy, dovedené k dokonalosti na sopečné půdě Indonésie.`,collage_sub_brazil:`DĚDICTVÍ`,collage_sub_columbia:`CHARAKTER`,collage_sub_sumatra:`PŮVOD`}},f=`en`,p=`duo-language`,m=()=>localStorage.getItem(p)||f,h=e=>{localStorage.setItem(p,e)},g=(e,t)=>d[e]?.[t]||d[f]?.[t]||t,_=()=>{let e=m();return`
    <div class = "btn_list">
    <button class="btn_lang ${e===`en`?`active`:``}" data-lang="en">EN</button>
    <button class="btn_lang ${e===`cz`?`active`:``}" data-lang="cz">CZ</button>
    </div>
    `},v=[{path:`/`,text:`nav_home`},{path:`/about`,text:`nav_about`},{path:`/contacts`,text:`nav_contact`},{path:`/menu`,text:`nav_menu`}],y=(e,t)=>v.map(n=>`
        <a  class="nav_links ${n.path===e?`active`:``}" href="${n.path}">${t(n.text)}</a>
        `).join(``),b=(e,t)=>(console.log(e),`
    <nav>
    ${y(e,t)}
    </nav>
    `),x=`/duo_cafe/assets/logo-C2qnGzv1.jpg`,S=(e,t)=>`
    <header class="header">
    <!-- Cafe Logo -->
    <img class="logo" src="${x}" alt="logo">

    <!-- Navigation Menu: Contains the page links. 
         On mobile, this is hidden by default and shown when the hamburger is clicked. -->
    <div class="header-menu" id="header-menu">
        ${b(e,t)}
    </div>

    <!-- Controls container: Holds the language switcher and the hamburger menu button -->
    <div class="header-controls">
        ${_()}
        
        <!-- Hamburger Menu Button: Only visible on smaller screens (mobile/tablet).
             Clicking this triggers JavaScript to open/close the mobile nav menu. -->
        <button class="hamburger" id="hamburger-btn">
            <svg viewBox="0 0 100 80" width="35" height="35" fill="#4fd1c5">
                <rect width="100" height="15" rx="8"></rect>
                <rect y="30" width="100" height="15" rx="8"></rect>
                <rect y="60" width="100" height="15" rx="8"></rect>
            </svg>
        </button>
    </div>
    </header>
    `,C=`/duo_cafe/assets/brazil-map-bean-CUAcD6uv.jpg`,w=`/duo_cafe/assets/columbia-ripe-berry-Di5i5roE.jpg`,T=`/duo_cafe/assets/hero-Dg5suEkF.jpg`,E=`/duo_cafe/assets/sumatra-BU3AJZLc.jpg`,D=`/duo_cafe/assets/brazil-colag-UD0BO0Vk.jpg`,O=`/duo_cafe/assets/colombia-colag-DZ9ywhgN.jpg`,k=`/duo_cafe/assets/sumatra-colag-CuJr_zVb.jpg`,A=e=>`
    <div class="about_page dark-tech-theme">
        
        <!-- Hero Секция (Главный баннер) -->
        <section class="about-hero" style="background-image: url('${T}');">
            <div class="hero-overlay"></div>
            <div class="hero-content fade-in-up">
                <h1>${e(`about_hero_title`)||`NÁŠ PŘÍBĚH`}</h1>
                <p>${e(`about_hero_subtitle`)||`Umění dokonalého šálku začíná zde`}</p>
            </div>
        </section>

        <!-- Секция 1: Бразилия (Текст слева, Картинка справа) -->
        <section class="about-row">
            <div class="about-text fade-in-up">
                <h2>${e(`about_brazil_title`)||`BRAZÍLIE: GENETICKÉ DĚDICTVÍ`}</h2>
                <p>${e(`about_brazil_text`)||`Chuťový profil tradiční brazilské kávy je nezaměnitelný. Záměrně jsme vybrali tyto ikonické odrůdy pro jejich bohaté tóny čokolády a oříšků. Zasadili jsme je však do sopečné půdy na Sumatře. Tím zachováváme brazilský charakter a obohacujeme jej o hluboký indonéský terroir.`}</p>
            </div>
            <div class="about-image fade-in-up">
                <img src="${C}" alt="Brazil Coffee Beans">
            </div>
        </section>

        <!-- Секция 2: Колумбия (Картинка слева, Текст справа) -->
        <section class="about-row reverse">
            <div class="about-image fade-in-up">
                <img src="${w}" alt="Colombia Ripe Berry">
            </div>
            <div class="about-text fade-in-up">
                <h2>${e(`about_columbia_title`)||`KOLUMBIE: UŠLECHTILÁ VŮNĚ`}</h2>
                <p>${e(`about_columbia_text`)||`Kolumbijská káva je celosvětově ceněna pro svou zářivou vůni a jemnou ovocnou sladkost. Přenesli jsme tuto výjimečnou genetiku do Indonésie. V našem unikátním mikroklimatu na Sumatře si zachovává svou lehkost, ale získává komplexnější a plnější tělo.`}</p>
            </div>
        </section>
        
        <!-- Секция 3: Индонезия - Суматра (Текст слева, Картинка справа) -->
        <section class="about-row">
            <div class="about-text fade-in-up">
                <h2>${e(`about_sumatra_title`)||`INDONÉSIE: NÁŠ DOMOV`}</h2>
                <p>${e(`about_sumatra_text`)||`Sumatra je skutečným srdcem DuoCafe. Každé zrno, které pražíme, vyrostlo právě zde. Spojením špičkové genetiky z Brazílie a Kolumbie s úrodnou vulkanickou půdou Indonésie tvoříme naprosto jedinečnou kávu. Tropické podnebí jí dodává zemitou eleganci a dokonalou harmonii.`}</p>
            </div>
            <div class="about-image fade-in-up">
                <img src="${E}" alt="Sumatra Coffee Beans">
            </div>
        </section>

        <!-- Intro text for the Collage -->
        <section class="collage-intro fade-in-up">
            <h1>${e(`collage_title`)||`KOŘENY VE SVĚTĚ, SRDCE V SUMATŘE.`}</h1>
        </section>

        <!-- Косой Асимметричный Коллаж -->
        <section class="coffee-collage fade-in-up">
            <div class="collage-item left">
                <div class="collage-inner" style="background-image: url('${D}');"></div>
                <h3>Brazílie<br><span>${e(`collage_sub_brazil`)||`DĚDICTVÍ`}</span></h3>
            </div>
            <div class="collage-item center">
                <div class="collage-inner" style="background-image: url('${k}');"></div>
                <h3>Sumatra<br><span>${e(`collage_sub_sumatra`)||`PŮVOD`}</span></h3>
            </div>
            <div class="collage-item right">
                <div class="collage-inner" style="background-image: url('${O}');"></div>
                <h3>Kolumbie<br><span>${e(`collage_sub_columbia`)||`CHARAKTER`}</span></h3>
            </div>
        </section>

        <!-- Подпись под коллажем -->
        <section class="collage-caption fade-in-up">
            <p>${e(`collage_text`)||`Brazilské a kolumbijské odrůdy, dovedené k dokonalosti na sopečné půdě Indonésie.`}</p>
        </section>

        <!-- Секция 3: DuoCafe v числах -->
        <section class="about-numbers-section fade-in-up">
            <h2 class="numbers-title">${e(`about_numbers_title`)}</h2>
            
            <div class="numbers-grid">
                <!-- Квадраты -->
                <div class="number-card"><h3>${e(`about_num1_val`)}</h3><p>${e(`about_num1_text`)}</p></div>
                <div class="number-card"><h3>${e(`about_num2_val`)}</h3><p>${e(`about_num2_text`)}</p></div>
                <div class="number-card"><h3>${e(`about_num3_val`)}</h3><p>${e(`about_num3_text`)}</p></div>
                <div class="number-card"><h3>${e(`about_num4_val`)}</h3><p>${e(`about_num4_text`)}</p></div>
            </div>
        </section>

    </div>
    `,j=`/duo_cafe/assets/contacts1-DxYppO0K.jpg`,M=`/duo_cafe/assets/contacts2-nn4M6STi.jpg`,N=e=>`
    <div class="contacts-split-page">
        <!-- Блок Praha 5 -->
        <div class="split-block praha5" style="background: linear-gradient(rgba(18, 20, 22, 0.80), rgba(18, 20, 22, 0.80)), url('${j}') center/cover no-repeat;">
            <div class="split-content">
                <h2>PRAHA 5</h2>
                <div class="info-table">
                    <div class="info-row">
                        <span class="label">${e(`contact_address_label`)||`ADRESA`}</span>
                        <span class="value">${e(`contact_address_p5`)||`Plzeňská 182/179, 150 00 Praha 5-Košíře`}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">${e(`contact_hours_label`)||`OTEVÍRACÍ DOBA`}</span>
                        <span class="value">${e(`contact_hours_p5_1`)||`Po - Pá: 07:00–20:00`}<br>${e(`contact_hours_p5_2`)||`So: 08:00–20:00`}<br>${e(`contact_hours_p5_3`)||`Ne: 08:00–15:00`}</span>
                    </div>
                </div>
            </div>
            <div class="split-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=Plzeňská+182/179,+150+00+Praha+5-Košíře" target="_blank" class="btn-neon">${e(`btn_navigate`)||`NAVIGOVAT`}</a>
                <a href="tel:+420774315847" class="btn-neon">${e(`btn_call`)||`ZAVOLAT`}</a>
            </div>
        </div>

        <!-- Блок Praha 3 -->
        <div class="split-block praha3" style="background: linear-gradient(rgba(18, 20, 22, 0.80), rgba(18, 20, 22, 0.80)), url('${M}') center/cover no-repeat;">
            <div class="split-content">
                <h2>PRAHA 3</h2>
                <div class="info-table">
                    <div class="info-row">
                        <span class="label">${e(`contact_address_label`)||`ADRESA`}</span>
                        <span class="value">${e(`contact_address_p3`)||`Táboritská 16/24, 130 00 Praha 3-Vinohrady`}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">${e(`contact_hours_label`)||`OTEVÍRACÍ DOBA`}</span>
                        <span class="value">${e(`contact_hours_p3_1`)||`Po: 10:00–11:00`}<br>${e(`contact_hours_p3_2`)||`Út - Pá: 07:00–20:00`}<br>${e(`contact_hours_p3_3`)||`So: 08:00–20:00`}<br>${e(`contact_hours_p3_4`)||`Ne: 10:00–18:00`}</span>
                    </div>
                </div>
            </div>
            <div class="split-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=Táboritská+16/24,+130+00+Praha+3-Vinohrady" target="_blank" class="btn-neon">${e(`btn_navigate`)||`NAVIGOVAT`}</a>
                <a href="tel:+420608081434" class="btn-neon">${e(`btn_call`)||`ZAVOLAT`}</a>
            </div>
        </div>
    </div>
    `,P=`/duo_cafe/assets/breakfast1-CCMa6iCo.jpg`,F=`/duo_cafe/assets/breakfast2-BHyXAAKk.jpg`,I=`/duo_cafe/assets/pasta1-DF6DmOcv.jpg`,L=`/duo_cafe/assets/pasta2-BZMAP7QE.jpg`,R=`/duo_cafe/assets/salads-CFEbGa0F.jpg`,z=`/duo_cafe/assets/soups-CZ_XYrJE.jpg`,B=`/duo_cafe/assets/pizza1-DnB0wuAZ.jpg`,V=`/duo_cafe/assets/pizza2-CcKfxzin.jpg`,H=e=>`
    <div class="menu-page dark-tech-theme">
        <div class="menu-header">
            <h1 class="menu-title">${e(`menu_title`)}</h1>
            
            <!-- Интерактивный переключатель локаций -->
            <div class="location-switcher">
                <button class="location-btn active" data-location="praha5">Praha 5</button>
                <button class="location-btn" data-location="praha3">Praha 3</button>
            </div>
        </div>

        <div class="menu-container">
            <!-- Пицца (Скрыта по умолчанию, только для Praha 3) -->
            <section class="menu-section fade-in-up pizza-section" id="pizza-section">
                <h2 class="section-title">${e(`menu_pizza`)}</h2>
                <div class="menu-image-card"><img src="${B}" alt="Pizza 1"></div>
                <div class="menu-image-card"><img src="${V}" alt="Pizza 2"></div>
            </section>

            <!-- Завтраки -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${e(`menu_breakfast`)}</h2>
                <div class="menu-image-card"><img src="${P}" alt="Snídaně 1"></div>
                <div class="menu-image-card"><img src="${F}" alt="Snídaně 2"></div>
            </section>

            <!-- Паста -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${e(`menu_pasta`)}</h2>
                <div class="menu-image-card"><img src="${I}" alt="Pasta 1"></div>
                <div class="menu-image-card"><img src="${L}" alt="Pasta 2"></div>
            </section>

            <!-- Салаты -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${e(`menu_salads`)}</h2>
                <div class="menu-image-card"><img src="${R}" alt="Saláty"></div>
            </section>

            <!-- Супы -->
            <section class="menu-section fade-in-up">
                <h2 class="section-title">${e(`menu_soups`)}</h2>
                <div class="menu-image-card"><img src="${z}" alt="Polévky"></div>
            </section>
        </div>
    </div>
    `,U=e=>`
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
                <h2>${e(`not_found_title`)||`PAGE NOT FOUND`}</h2>
                <p>${e(`not_found_desc`)||`Looks like this page spilled away.`}</p>
                <a href="/" class="btn-return">
                    <span>${e(`not_found_btn`)||`RETURN HOME`}</span>
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </div>
    `,W=`/duo_cafe/assets/coffee2-DEi4WC9A.png`,G=e=>(setTimeout(()=>{let e=document.querySelector(`.about_text`);e&&K.observe(e)},100),setTimeout(()=>{let e=document.querySelector(`.reviews`);e&&q.observe(e)},100),`
<div class="home">
        <div class="home1"> 
            <img src="${W}" alt="Coffee">
        </div>        
        <div class="span1">
            <b>${e(`perfect_brew`)}</b>
        </div>
        <div class="span2"><b>
            ${e(`cozy_corner`)}</b> 
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
        <p class="info_text"><b>${e(`info_text`)}</b></p>
        <div class="info">
        </div>
        <div class="about_text">
            ${e(`about_text`)}
        </div>
        <div>
            <div class="reviews_title">${e(`reviews`)}</div>
            <ul class="reviews">      
                <li class="rev1"></li>
                <li class="rev2"></li>
                <li class="rev3"></li>
                <li class="rev4"></li>
            </ul> 
        </div>

    `),K=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),K.unobserve(e.target))})}),q=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),q.unobserve(e.target))})},{threshold:.3,rootMargin:`0px 0px -250px 0px`}),J=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.page=r()})(e,(function(){var e=Array.isArray||function(e){return Object.prototype.toString.call(e)==`[object Array]`},t=v,n=s,r=c,i=l,a=_,o=new RegExp([`(\\\\.)`,`([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))`].join(`|`),`g`);function s(e){for(var t=[],n=0,r=0,i=``,a;(a=o.exec(e))!=null;){var s=a[0],c=a[1],l=a.index;if(i+=e.slice(r,l),r=l+s.length,c){i+=c[1];continue}i&&=(t.push(i),``);var u=a[2],f=a[3],p=a[4],m=a[5],h=a[6],g=a[7],_=h===`+`||h===`*`,v=h===`?`||h===`*`,y=u||`/`,b=p||m||(g?`.*`:`[^`+y+`]+?`);t.push({name:f||n++,prefix:u||``,delimiter:y,optional:v,repeat:_,pattern:d(b)})}return r<e.length&&(i+=e.substr(r)),i&&t.push(i),t}function c(e){return l(s(e))}function l(t){for(var n=Array(t.length),r=0;r<t.length;r++)typeof t[r]==`object`&&(n[r]=RegExp(`^`+t[r].pattern+`$`));return function(r){for(var i=``,a=r||{},o=0;o<t.length;o++){var s=t[o];if(typeof s==`string`){i+=s;continue}var c=a[s.name],l;if(c==null){if(s.optional)continue;throw TypeError(`Expected "`+s.name+`" to be defined`)}if(e(c)){if(!s.repeat)throw TypeError(`Expected "`+s.name+`" to not repeat, but received "`+c+`"`);if(c.length===0){if(s.optional)continue;throw TypeError(`Expected "`+s.name+`" to not be empty`)}for(var u=0;u<c.length;u++){if(l=encodeURIComponent(c[u]),!n[o].test(l))throw TypeError(`Expected all "`+s.name+`" to match "`+s.pattern+`", but received "`+l+`"`);i+=(u===0?s.prefix:s.delimiter)+l}continue}if(l=encodeURIComponent(c),!n[o].test(l))throw TypeError(`Expected "`+s.name+`" to match "`+s.pattern+`", but received "`+l+`"`);i+=s.prefix+l}return i}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,`\\$1`)}function d(e){return e.replace(/([=!:$\/()])/g,`\\$1`)}function f(e,t){return e.keys=t,e}function p(e){return e.sensitive?``:`i`}function m(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return f(e,t)}function h(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(v(e[i],t,n).source);return f(RegExp(`(?:`+r.join(`|`)+`)`,p(n)),t)}function g(e,t,n){for(var r=s(e),i=_(r,n),a=0;a<r.length;a++)typeof r[a]!=`string`&&t.push(r[a]);return f(i,t)}function _(e,t){t||={};for(var n=t.strict,r=t.end!==!1,i=``,a=e[e.length-1],o=typeof a==`string`&&/\/$/.test(a),s=0;s<e.length;s++){var c=e[s];if(typeof c==`string`)i+=u(c);else{var l=u(c.prefix),d=c.pattern;c.repeat&&(d+=`(?:`+l+d+`)*`),d=c.optional?l?`(?:`+l+`(`+d+`))?`:`(`+d+`)?`:l+`(`+d+`)`,i+=d}}return n||(i=(o?i.slice(0,-2):i)+`(?:\\/(?=$))?`),r?i+=`$`:i+=n&&o?``:`(?=\\/|$)`,RegExp(`^`+i,p(t))}function v(t,n,r){return n||=[],e(n)?r||={}:(r=n,n=[]),t instanceof RegExp?m(t,n,r):e(t)?h(t,n,r):g(t,n,r)}t.parse=n,t.compile=r,t.tokensToFunction=i,t.tokensToRegExp=a;var y=typeof document<`u`,b=typeof window<`u`,x=typeof history<`u`,S=typeof process<`u`,C=y&&document.ontouchstart?`touchstart`:`click`,w=b&&!!(window.history.location||window.location);function T(){this.callbacks=[],this.exits=[],this.current=``,this.len=0,this._decodeURLComponents=!0,this._base=``,this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}T.prototype.configure=function(e){var t=e||{};this._window=t.window||b&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&b,this._click=t.click!==!1&&y,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener(`popstate`,this._onpopstate,!1):b&&n.removeEventListener(`popstate`,this._onpopstate,!1),this._click?n.document.addEventListener(C,this.clickHandler,!1):y&&n.document.removeEventListener(C,this.clickHandler,!1),this._hashbang&&b&&!x?n.addEventListener(`hashchange`,this._onpopstate,!1):b&&n.removeEventListener(`hashchange`,this._onpopstate,!1)},T.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e},T.prototype._getBase=function(){var e=this._base;if(e)return e;var t=b&&this._window&&this._window.location;return b&&this._hashbang&&t&&t.protocol===`file:`&&(e=t.pathname),e},T.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e},T.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){this._running=!0;var n;if(w){var r=this._window.location;n=this._hashbang&&~r.hash.indexOf(`#!`)?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,t.dispatch)}},T.prototype.stop=function(){if(this._running){this.current=``,this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(C,this.clickHandler,!1),b&&e.removeEventListener(`popstate`,this._onpopstate,!1),b&&e.removeEventListener(`hashchange`,this._onpopstate,!1)}},T.prototype.show=function(e,t,n,r){var i=new A(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==n&&this.dispatch(i,a),!1!==i.handled&&!1!==r&&i.pushState(),i},T.prototype.back=function(e,t){var n=this;if(this.len>0){var r=this._window;x&&r.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})},T.prototype.redirect=function(e,t){var n=this;typeof e==`string`&&typeof t==`string`&&D.call(this,e,function(e){setTimeout(function(){n.replace(t)},0)}),typeof e==`string`&&t===void 0&&setTimeout(function(){n.replace(e)},0)},T.prototype.replace=function(e,t,n,r){var i=new A(e,t,this),a=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=n,i.save(),!1!==r&&this.dispatch(i,a),i},T.prototype.dispatch=function(e,t){var n=0,r=0,i=this;function a(){var e=i.exits[r++];if(!e)return o();e(t,a)}function o(){var t=i.callbacks[n++];if(e.path!==i.current){e.handled=!1;return}if(!t)return O.call(i,e);t(e,o)}t?a():o()},T.prototype.exit=function(e,t){if(typeof e==`function`)return this.exit(`*`,e);for(var n=new j(e,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))},T.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var r=0;r<n.length;r++)if(n[r].nodeName&&n[r].nodeName.toUpperCase()===`A`&&n[r].href){t=n[r];break}}for(;t&&t.nodeName.toUpperCase()!==`A`;)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!==`A`)){var i=typeof t.href==`object`&&t.href.constructor.name===`SVGAnimatedString`;if(!(t.hasAttribute(`download`)||t.getAttribute(`rel`)===`external`)){var a=t.getAttribute(`href`);if(!(!this._hashbang&&this._samePath(t)&&(t.hash||a===`#`))&&!(a&&a.indexOf(`mailto:`)>-1)&&!(i?t.target.baseVal:t.target)&&!(!i&&!this.sameOrigin(t.href))){var o=i?t.href.baseVal:t.pathname+t.search+(t.hash||``);o=o[0]===`/`?o:`/`+o,S&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,`/`));var s=o,c=this._getBase();o.indexOf(c)===0&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace(`#!`,``)),!(c&&s===o&&(!w||this._window.location.protocol!==`file:`))&&(e.preventDefault(),this.show(s))}}}}},T.prototype._onpopstate=(function(){var e=!1;return b?(y&&document.readyState===`complete`?e=!0:window.addEventListener(`load`,function(){setTimeout(function(){e=!0},0)}),function(t){if(e){var n=this;if(t.state){var r=t.state.path;n.replace(r,t.state)}else if(w){var i=n._window.location;n.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}})(),T.prototype._which=function(e){return e||=b&&this._window.event,e.which==null?e.button:e.which},T.prototype._toURL=function(e){var t=this._window;if(typeof URL==`function`&&w)return new URL(e,t.location.toString());if(y){var n=t.document.createElement(`a`);return n.href=e,n}},T.prototype.sameOrigin=function(e){if(!e||!w)return!1;var t=this._toURL(e),n=this._window.location;return n.protocol===t.protocol&&n.hostname===t.hostname&&(n.port===t.port||n.port===``&&(t.port==80||t.port==443))},T.prototype._samePath=function(e){if(!w)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},T.prototype._decodeURLEncodedURIComponent=function(e){return typeof e==`string`&&this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g,` `)):e};function E(){var e=new T;function t(){return D.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=E,Object.defineProperty(t,`len`,{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(t,`current`,{get:function(){return e.current},set:function(t){e.current=t}}),t.Context=A,t.Route=j,t}function D(e,t){if(typeof e==`function`)return D.call(this,`*`,e);if(typeof t==`function`)for(var n=new j(e,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else typeof e==`string`?this[typeof t==`string`?`redirect`:`show`](e,t):this.start(e)}function O(e){if(!e.handled){var t,n=this,r=n._window;t=n._hashbang?w&&this._getBase()+r.location.hash.replace(`#!`,``):w&&r.location.pathname+r.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,w&&(r.location.href=e.canonicalPath))}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,`\\$1`)}function A(e,t,n){var r=this.page=n||D,i=r._window,a=r._hashbang,o=r._getBase();e[0]===`/`&&e.indexOf(o)!==0&&(e=o+(a?`#!`:``)+e);var s=e.indexOf(`?`);this.canonicalPath=e;var c=RegExp(`^`+k(o));if(this.path=e.replace(c,``)||`/`,a&&(this.path=this.path.replace(`#!`,``)||`/`),this.title=y&&i.document.title,this.state=t||{},this.state.path=e,this.querystring=~s?r._decodeURLEncodedURIComponent(e.slice(s+1)):``,this.pathname=r._decodeURLEncodedURIComponent(~s?e.slice(0,s):e),this.params={},this.hash=``,!a){if(!~this.path.indexOf(`#`))return;var l=this.path.split(`#`);this.path=this.pathname=l[0],this.hash=r._decodeURLEncodedURIComponent(l[1])||``,this.querystring=this.querystring.split(`#`)[0]}}A.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,x&&t.history.pushState(this.state,this.title,n&&this.path!==`/`?`#!`+this.path:this.canonicalPath)},A.prototype.save=function(){var e=this.page;x&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!==`/`?`#!`+this.path:this.canonicalPath)};function j(e,n,r){var i=this.page=r||M,a=n||{};a.strict=a.strict||i._strict,this.path=e===`*`?`(.*)`:e,this.method=`GET`,this.regexp=t(this.path,this.keys=[],a)}j.prototype.middleware=function(e){var t=this;return function(n,r){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,r);r()}},j.prototype.match=function(e,t){var n=this.keys,r=e.indexOf(`?`),i=~r?e.slice(0,r):e,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;delete t[0];for(var o=1,s=a.length;o<s;++o){var c=n[o-1],l=this.page._decodeURLEncodedURIComponent(a[o]);(l!==void 0||!hasOwnProperty.call(t,c.name))&&(t[c.name]=l)}return!0};var M=E(),N=M;return N.default=M,N}))}))(),1),Y=e=>{(0,J.default)(`/`,t=>e(G,t.pathname)),(0,J.default)(`/about`,t=>e(A,t.pathname)),(0,J.default)(`/contacts`,t=>e(N,t.pathname)),(0,J.default)(`/menu`,t=>e(H,t.pathname)),(0,J.default)(`*`,t=>e(U,t.pathname)),(0,J.default)()},X=()=>{let e=document.querySelector(`.about-numbers-section`),t=document.querySelectorAll(`.number-card`);!e||t.length===0||(t.forEach(e=>{let t=e.querySelector(`h3`);if(t){t.hasAttribute(`data-target`)||t.setAttribute(`data-target`,t.innerText.trim());let e=t.getAttribute(`data-target`).match(/^(\d+)(.*)$/);e&&(t.innerText=`0`+e[2])}}),new IntersectionObserver((n,r)=>{n.forEach(n=>{if(n.isIntersecting){let n=e=>new Promise(t=>{let n=e.querySelector(`h3`);if(!n)return t();let r=n.getAttribute(`data-target`).match(/^(\d+)(.*)$/);if(!r)return t();let i=parseInt(r[1],10),a=r[2],o=performance.now(),s=e=>{let r=e-o,c=Math.min(r/1200,1),l=i*(1-(1-c)*(1-c));c<1?(n.innerText=Math.ceil(l)+a,requestAnimationFrame(s)):(n.innerText=i+a,t())};requestAnimationFrame(s)});(async()=>{for(let e of t)await n(e)})(),r.unobserve(e)}})},{threshold:.3}).observe(e))},Z=()=>{let e=document.querySelectorAll(`.location-btn`),t=document.getElementById(`pizza-section`);e.length===0||!t||e.forEach(n=>{n.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),n.getAttribute(`data-location`)===`praha3`?t.classList.add(`show`):t.classList.remove(`show`)})})},Q=()=>{let e=document.querySelectorAll(`.contact-loc-btn`),t=document.querySelector(`.contacts-page`),n=document.querySelectorAll(`.contact-card`);!t||e.length===0||e.forEach(r=>{r.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`);let i=r.getAttribute(`data-location`);i===`praha3`?t.classList.add(`show-praha3`):t.classList.remove(`show-praha3`),n.forEach(e=>e.classList.toggle(`active`,e.id===`card-${i}`))})})},$=(e,t)=>{let n=m(),r=e=>g(n,e);document.querySelector(`#app`).innerHTML=`
  ${S(t,r)}
  ${l(e,r)}
  ${u()}
  `;let i=document.getElementById(`hamburger-btn`),a=document.getElementById(`header-menu`);i&&a&&i.addEventListener(`click`,()=>{a.classList.toggle(`is-open`)}),document.querySelectorAll(`.btn_lang`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.lang;h(r),$(e,t)})}),X(),Z(),Q()};Y($);