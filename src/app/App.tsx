import { Suspense, useEffect, useState } from 'react'
import './styles/index.scss'
import clsx from 'clsx'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={clsx(['app', theme])} >
            <Suspense fallback=''>
                <Navbar />
                <div className={'content'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
