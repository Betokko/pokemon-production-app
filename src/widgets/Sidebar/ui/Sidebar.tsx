import { memo, useState } from 'react'
import clsx from 'clsx'
import s from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import BackIcon from 'shared/assets/icons/arrow_back_black_24dp.svg'
import HomeIcon from 'shared/assets/icons/home_black_24dp.svg'
import DescriptionIcon from 'shared/assets/icons/description_black_24dp.svg'
import PersonIcon from 'shared/assets/icons/person_black_24dp.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(true)
    const toggle = () => { setCollapsed(!collapsed) }

    return (
        <div
            className={clsx([s.sidebar, collapsed && s.sidebarCollapsed, className])}
            data-testid='sidebar'
        >
            <Button
                className={clsx([s.toggleIcon, collapsed && s.toggleIconCollapsed])}
                onClick={toggle}
                data-testid='toggleButton'
            >
                <BackIcon fill={'var(--primary-color)'}/>
            </Button>

            <AppLink to={'/'}>
                <HomeIcon className={ clsx(s.linkIcon) }/>
                <div>{!collapsed && t('main')}</div>
            </AppLink>

            <AppLink to={'/about'}>
                <DescriptionIcon className={ clsx(s.linkIcon) }/>
                <div>{!collapsed && t('about')}</div>
            </AppLink>

            <AppLink to={'/profile'}>
                <PersonIcon className={ clsx(s.linkIcon) }/>
                <div>{!collapsed && t('profile page')}</div>
            </AppLink>

        </div>
    )
})
