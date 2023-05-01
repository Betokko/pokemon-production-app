import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    open: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, open, onClose } = props
    const { t } = useTranslation()

    return (
        <Modal
            className={clsx([s.loginModal, className])}
            open={open}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    )
}
