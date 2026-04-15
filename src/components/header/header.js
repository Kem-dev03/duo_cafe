import { blockLang } from "./blockLang"
import { nav } from "./nav"
import logo from "../../../img/logo.jpg"




export const header = ( currentPath , t) => {
    return /* html */ `
    <header class="header">
    <img class="logo" src="${logo}" alt="logo">


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