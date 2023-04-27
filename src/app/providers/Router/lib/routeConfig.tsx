import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { type RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.NOT_FOUND]: '*'
}

export const routeConfig: RouteProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
