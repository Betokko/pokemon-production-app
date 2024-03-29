import { memo, useState } from 'react'
import clsx from 'clsx'
import s from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import BackIcon from 'shared/assets/icons/arrow_back_black_24dp.svg'
import HomeIcon from 'shared/assets/icons/home_black_24dp.svg'
import DescriptionIcon from 'shared/assets/icons/description_black_24dp.svg'
import PersonIcon from 'shared/assets/icons/person_black_24dp.svg'
import Pokeball from 'shared/assets/icons/pokeball_black_24dp.svg'
import { AppLink } from 'shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'app/providers/Router/lib/routeConfig'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(true)
    const toggle = () => { setCollapsed(!collapsed) }
    const authData = useSelector(getUserAuthData)

    return (
        <aside
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

            {authData && (
                <AppLink to={`${RoutePath.profile}/${authData.id}`}>
                    <PersonIcon className={ clsx(s.linkIcon) }/>
                    <div>{!collapsed && t('profile')}</div>
                </AppLink>
            )}

            <AppLink to={'/pokemon'}>
                <Pokeball className={ clsx(s.linkIcon) }/>
                <div>{!collapsed && t('pokemon')}</div>
            </AppLink>

        </aside>
    )
})
