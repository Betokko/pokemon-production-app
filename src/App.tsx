import './styles/index.scss'
import {Suspense} from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`} >

            <Link to={'/'} >Главная</Link>
            <Link to={'/about'} >О сайте</Link>

            <button onClick={toggleTheme}>
                Theme
            </button>

            <Suspense fallback={null}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
