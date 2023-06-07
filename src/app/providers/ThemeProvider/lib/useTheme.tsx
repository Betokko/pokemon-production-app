import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface IUseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}

export function useTheme (): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme: Theme
        if (theme === Theme.DARK) {
            newTheme = Theme.LIGHT
        } else if (theme === Theme.LIGHT) {
            newTheme = Theme.PIKACHU
        } else if (theme === Theme.PIKACHU) {
            newTheme = Theme.DARK
        } else {
            newTheme = Theme.LIGHT
        }
        if (setTheme != null) setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
