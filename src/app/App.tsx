import { Suspense, useState } from 'react'
import './styles/index.scss'
import clsx from 'clsx'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
    const { theme } = useTheme()

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
