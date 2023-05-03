import clsx from 'clsx'
import s from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher'
import logo from 'shared/assets/logo.png'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const authData = useSelector(selectUserAuthData)
    const [openAuthModal, setOpenAuthModal] = useState(false)
    const onCloseModal = useCallback(() => { setOpenAuthModal(false) }, [])
    const onShowModal = useCallback(() => { setOpenAuthModal(true) }, [])
    const onLogOut = useCallback(() => {
        setOpenAuthModal(false)
        dispatch(userActions.logOut())
    }, [dispatch])

    if (authData) {
        return (
            <div className={clsx([s.navbar, className])}>
                <AppLink to={'/'} className={s.logo}>
                    <img src={logo} />
                </AppLink>

                <div className={s.links}>
                    <Button onClick={onLogOut} theme={ThemeButton.PRIMARY}>{t('sign out')}</Button>
                </div>

                <div className={s.controls}>
                    <LangSwitcher/>
                    <ThemeSwitcher/>
                </div>
            </div>
        )
    }

    return (
        <div className={clsx([s.navbar, className])}>
            <AppLink to={'/'} className={s.logo}>
                <img src={logo} />
            </AppLink>

            <div className={s.links}>
                <Button onClick={onShowModal} theme={ThemeButton.PRIMARY}>{t('sign in')}</Button>
            </div>

            <div className={s.controls}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>

            <LoginModal
                open={openAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}
