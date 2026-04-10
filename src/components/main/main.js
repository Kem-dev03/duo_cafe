export const main = (page, t) => {
    return /* html */`
    <main class="main">
    ${page(t)}
    </main>
    `
}