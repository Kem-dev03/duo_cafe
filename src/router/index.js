import page from 'page';
import { home , about , contacts , menu , page404 } from '../pages'

export const InitRouter =(routeHandler) => {
    // Обрабатываем все варианты корневого пути: /, /index.html и базовый путь /duo_cafe/
    page(`/`, (ctx) => routeHandler(home, ctx));
    page(`/index.html`, (ctx) => routeHandler(home, ctx));
    
    // Остальные страницы
    page(`/about`, (ctx) => routeHandler(about, ctx))
    page(`/contacts`, (ctx) => routeHandler(contacts, ctx))
    page(`/menu`, (ctx) => routeHandler(menu, ctx))
    
    // Страница 404 для всех остальных случаев
    page(`*`, (ctx) => routeHandler(page404, ctx))
} 

// page.base('/duo_cafe/'); // Закомментировано для локальной разработки