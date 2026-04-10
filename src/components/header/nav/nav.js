const links = [
    {
        path : "/",
        text : "nav_home"
    },
    {
        path : "/about",
        text : "nav_about"
    },
    {
        path : "/contacts",
        text : "nav_contact"
    },
    {
        path : "/gallery",
        text : "nav_gallarey"
    },
    {
        path : "/menu",
        text : "nav_menu"
    }
]
const creatLinks = (currentPath , t) => {
    return links.map(link => {
        return /* html */`
        <a  class="nav_links ${link.path === currentPath ? 'active' : ''}" href="${link.path}">${t(link.text)}</a>
        `
        }).join('')
}

export const nav = (currentPath , t) => {
    console.log(currentPath);
    return /* html */`
    <nav>
    ${creatLinks(currentPath , t )}
    </nav>
    `
}
