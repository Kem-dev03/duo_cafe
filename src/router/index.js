import { home , about , contacts , gallery , menu , page404 } from '../pages'
import page from 'page'

export const InitRouter =(renderApp) => {
    page(`/`, (ctx) => renderApp(home, ctx.pathname))
    page(`/about`, (ctx) => renderApp(about, ctx.pathname))
    page(`/contacts`, (ctx) => renderApp(contacts, ctx.pathname))
    page(`/gallery`, (ctx) => renderApp(gallery, ctx.pathname))
    page(`/menu`, (ctx) => renderApp(menu,ctx.pathname))
    page(`*`, (ctx) => renderApp(page404,ctx.pathname))
    page()
}