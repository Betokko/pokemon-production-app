import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticlePage } from 'pages/ArticlePage'

export type TAppRouterProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE_PAGE = 'profile',
    ARTICLES = 'articles',
    ARTICLE = 'article',
    // last
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE_PAGE]: 'profile',
    [AppRoute.ARTICLES]: 'articles',
    [AppRoute.ARTICLE]: 'articles/', // + :id
    // last
    [AppRoute.NOT_FOUND]: '*'
}

export const routeConfig: TAppRouterProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.profile, element: <ProfilePage/>, authOnly: true },
    { path: RoutePath.articles, element: <ArticlesPage/>, authOnly: true },
    { path: `${RoutePath.article}:id`, element: <ArticlePage/>, authOnly: true },
    // last
    { path: RoutePath.notFound, element: <NotFoundPage /> }
]
