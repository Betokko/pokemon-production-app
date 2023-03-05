import { classNames } from 'shared/lib/classNames/classNames';
import { type FC, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import MenuIcon from 'shared/assets/icons/menu.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, routePath } from 'app/providers/router/config/routesConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation();

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testId="sidebar"
            className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testId="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
            >
                <MenuIcon fill="var(--secondary-color)" />
            </Button>
            <div className={s.links}>
                <AppLink to={routePath.main} theme={AppLinkTheme.SECONDARY}>
                    <div className={s.link}>
                        <HomeIcon fill="var(--secondary-color" />
                        {' '}
                        {!collapsed && t(AppRoutes.MAIN)}
                    </div>
                </AppLink>
                <AppLink to={routePath.about} theme={AppLinkTheme.SECONDARY}>
                    <div className={s.link}>
                        <ArticleIcon fill="var(--secondary-color" />
                        {' '}
                        {!collapsed && t(AppRoutes.ABOUT)}
                    </div>
                </AppLink>
            </div>
            <div className={classNames(s.switchers, { [s['switchers-collapsed']]: collapsed })}>
                <ThemeSwitcher withText={!collapsed} />
                <LangSwitcher withText={!collapsed} />
            </div>
        </div>
    );
};
