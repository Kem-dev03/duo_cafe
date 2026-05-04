import { blockLang } from "./blockLang"
import { nav } from "./nav"
import logo from "../../../img/logo.jpg"



// The header component function.
// It receives 'currentPath' (to know which nav link is active) 
// and 't' (the translation function for multi-language support).
export const header = ( currentPath , t) => {
    return /* html */ `
    <header class="header">
    <!-- Cafe Logo -->
    <img class="logo" src="${logo}" alt="logo">

    <!-- Navigation Menu: Contains the page links. 
         On mobile, this is hidden by default and shown when the hamburger is clicked. -->
    <div class="header-menu" id="header-menu">
        ${nav(currentPath, t)}
    </div>

    <!-- Controls container: Holds the language switcher and the hamburger menu button -->
    <div class="header-controls">
        ${blockLang()}
        
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
    `
}