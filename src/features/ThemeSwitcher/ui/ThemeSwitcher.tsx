import { memo } from 'react'
import clsx from 'clsx'
import s from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button'
import LightIcon from 'shared/assets/icons/light_mode_black_24dp.svg'
import DarkIcon from 'shared/assets/icons/dark_mode_black_24dp.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    const { className } = props

    return (
        <Button
            onClick={toggleTheme}
            className={clsx([s.themeSwitcher, className])}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.DARK
                    ? <LightIcon style={{ fill: 'var(--primary-color)' }} />
                    : <DarkIcon style={{ fill: 'var(--primary-color)' }} />
            }
        </Button>
    )
})
