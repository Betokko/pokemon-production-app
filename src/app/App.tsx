import './styles/index.scss'
import clsx from "clsx";
import {Suspense} from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={clsx(['app', theme])} >

            <Link to={'/'} >Главная</Link>
            <Link to={'/about'} >О сайте</Link>

            <button onClick={toggleTheme}>
                Theme
            </button>

            <Suspense fallback={null}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
