import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router-dom";

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
}

export const routeConfig: RouteProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
]
