import { classNames } from 'shared/lib/classNames/classNames';
import { type FC, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import MenuIcon from 'shared/assets/icons/menu.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
            >
                <MenuIcon fill="var(--secondary-color)" />
            </Button>
            <div className={classNames(styles.switchers, { [styles['switchers-collapsed']]: collapsed })}>
                <ThemeSwitcher />
                <LangSwitcher withText={!collapsed} />
            </div>
        </div>
    );
};
