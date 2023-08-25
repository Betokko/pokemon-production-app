import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { PokemonListPage } from 'pages/PokemonListPage'
import { PokemonPage } from 'pages/PokemonPage'

export type TAppRouterProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE_PAGE = 'profile',
    POKEMON = 'pokemon',
    // last
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE_PAGE]: 'profile',
    [AppRoute.POKEMON]: 'pokemon',
    // last
    [AppRoute.NOT_FOUND]: '*'
}

export const routeConfig: TAppRouterProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.profile, element: <ProfilePage/>, authOnly: true },
    { path: RoutePath.pokemon, element: <PokemonListPage/> },
    { path: `${RoutePath.pokemon}/:id`, element: <PokemonPage/> },
    // last
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
