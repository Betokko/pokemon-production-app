import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router-dom";


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routesConfig: RouteProps[] = [
    {
        path: routePath.main,
        element: <MainPage />
    },
    {
        path: routePath.about,
        element: <AboutPage />
    },
]