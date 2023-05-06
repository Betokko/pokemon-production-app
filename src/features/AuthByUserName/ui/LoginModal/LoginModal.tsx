import { FC, Suspense } from 'react'
import clsx from 'clsx'
import { Modal } from 'shared/ui/Modal'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'

export interface ILoginModalProps {
    className?: string
    open: boolean
    onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
    const { className, open, onClose } = props

    return (
        <Modal
            className={clsx([className])}
            open={open}
            onClose={onClose}
        >
            <Suspense fallback=''>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    )
}
