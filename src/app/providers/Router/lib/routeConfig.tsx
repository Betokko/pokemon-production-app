import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

type AppRouterProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE_PAGE = 'profile',
    // last
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE_PAGE]: 'profile',
    // last
    [AppRoute.NOT_FOUND]: '*'
}

export const routeConfig: AppRouterProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.profile, element: <ProfilePage/>, authOnly: true },
    // last
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
