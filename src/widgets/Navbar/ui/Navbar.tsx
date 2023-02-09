import {classNames} from "shared/lib/classNames/classNames";
import s from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(s.navbar, {}, [])}>
            <div className={s.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    Main
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
};