import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/light-mode.svg'
import DarkIcon from 'shared/assets/icons/dark-mode.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()


    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};