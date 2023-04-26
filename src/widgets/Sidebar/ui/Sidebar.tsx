import {FC, useState} from 'react';
import MenuIcon from 'shared/assets/icons/menu_black_24dp.svg'
import clsx from "clsx";
import s from './Sidebar.module.scss';
import {Button} from "shared/ui/Button";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(true)
    const toggle = () => setCollapsed(!collapsed)

    return (
        <div className={clsx([s.sidebar, collapsed && s.collapsed, className])}>
            <Button
                className={s.toggleIcon}
                onClick={toggle}
            >
                <MenuIcon fill={'var(--primary-color)'}/>
            </Button>
        </div>
    );
};
