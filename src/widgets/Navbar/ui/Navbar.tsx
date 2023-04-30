import clsx from 'clsx'
import s from './Navbar.module.scss'
import { AppLink, ThemeAppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher'
import logo from 'shared/assets/logo.png'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.navbar, className])}>
            <AppLink to={'/'} className={s.logo}>
                <img src={logo} />
            </AppLink>

            <div className={s.links}>
                <AppLink to={'/'} theme={ThemeAppLink.SECONDARY}>
                    {t('main')}
                </AppLink>
                <AppLink to={'/about'}>
                    {t('about')}
                </AppLink>
            </div>

            <div className={s.controls}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}
