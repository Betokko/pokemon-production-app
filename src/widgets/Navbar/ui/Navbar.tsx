import clsx from "clsx";
import s from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "features/LangSwitcher/ui/LangSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={clsx([s.navbar, className])}>
            <div>LOGO</div>

            <div className={s.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
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
    );
};
