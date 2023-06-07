import { createContext } from 'react'

export enum Theme {
    LIGHT = 'light_theme',
    DARK = 'dark_theme',
    PIKACHU = 'pikachu_theme'
}

export interface IThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
