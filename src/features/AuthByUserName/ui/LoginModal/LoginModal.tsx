import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
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
            className={clsx([className])}
            open={open}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    )
}
