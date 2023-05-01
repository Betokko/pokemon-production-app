import clsx from 'clsx'
import s from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher'
import logo from 'shared/assets/logo.png'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation()
    const [openAuthModal, setOpenAuthModal] = useState(false)
    const onToggleModal = useCallback(() => { setOpenAuthModal(prev => !prev) }, [])

    return (
        <div className={clsx([s.navbar, className])}>
            <AppLink to={'/'} className={s.logo}>
                <img src={logo} />
            </AppLink>

            <div className={s.links}>
                <Button onClick={onToggleModal} theme={ThemeButton.PRIMARY}>{t('sign in')}</Button>
            </div>

            <div className={s.controls}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>

            <Modal
                open={openAuthModal}
                onClose={onToggleModal}
            >
                {t('sign in')}
            </Modal>
        </div>
    )
}
