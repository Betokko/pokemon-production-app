import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface IUseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}

export function useTheme (): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        if (setTheme != null) setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
