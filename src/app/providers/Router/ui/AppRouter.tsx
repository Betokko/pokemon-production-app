import { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../lib/routeConfig'
import { FullscreenLoader } from 'shared/ui/Loader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData'

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData)
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        return !(route.authOnly && !isAuth)
    }), [isAuth])

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<FullscreenLoader/>}>
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    )
})
