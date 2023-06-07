import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig, TAppRouterProps } from '../lib/routeConfig'
import { FullscreenLoader } from 'shared/ui/Loader'
import { RequireAuth } from 'app/providers/Router/ui/RequireAuth'

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: TAppRouterProps) => {
        const element = (
            <Suspense fallback={<FullscreenLoader/>}>
                <div className={'page-wrapper'}>
                    {route.element}
                </div>
            </Suspense>
        )
        return <Route
            key={route.path}
            path={route.path}
            element={ route.authOnly ? <RequireAuth>{element}</RequireAuth> : element }
        />
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
})
