import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'app/providers/Router/lib/routeConfig'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()

    return !auth
        ? <Navigate to={RoutePath.main} state={{ from: location }} replace />
        : children
}
