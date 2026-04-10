import { blockLang } from "./blockLang"
import { nav } from "./nav"




export const header = ( currentPath , t) => {
    return /* html */ `
    <header class="header">
    <svg width="100" height="100" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="190" fill="#0f2a2a"/>

        <rect x="150" y="155" width="100" height="70" rx="10" fill="#4fd1c5"/>
        <circle cx="260" cy="190" r="15" fill="none" stroke="#4fd1c5" stroke-width="8"/>
        
        <path d="M190 150 Q200 130 190 110" stroke="#4fd1c5" stroke-width="5" fill="none"/>
        <path d="M210 150 Q220 130 210 110" stroke="#4fd1c5" stroke-width="5" fill="none"/>

        <text x="200" y="250" text-anchor="middle" fill="white" font-size="22" font-family="Arial" font-weight="bold">
        DUOCAFE & BISTRO
        </text>

        <text x="200" y="280" text-anchor="middle" fill="#4fd1c5" font-size="16" font-family="Arial">
        ESPRESS YOURSELF
        </text>
    </svg>

    <div class="header-menu" id="header-menu">
        ${nav(currentPath, t)}
    </div>

    <div class="header-controls">
        ${blockLang()}
        <button class="hamburger" id="hamburger-btn">
            <svg viewBox="0 0 100 80" width="35" height="35" fill="#4fd1c5">
                <rect width="100" height="15" rx="8"></rect>
                <rect y="30" width="100" height="15" rx="8"></rect>
                <rect y="60" width="100" height="15" rx="8"></rect>
            </svg>
        </button>
    </div>
    </header>
    `
}