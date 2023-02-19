import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light-mode.svg';
import DarkIcon from 'shared/assets/icons/dark-mode.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
    withText?: boolean
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className, withText = true } = props;
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <div className={s.wrapper}>
                {
                    theme === Theme.DARK
                        ? <DarkIcon fill="var(--primary-color" />
                        : <LightIcon fill="var(--primary-color" />
                }
                <p>
                    {
                        withText && `${t('theme')}: ${
                            theme === Theme.DARK
                                ? t('darkTheme')
                                : t('lightTheme')}`
                    }
                </p>
            </div>
        </Button>
    );
};
