import React, { FC, ReactNode, useCallback, useEffect, useRef, useState, Suspense } from 'react'
import clsx from 'clsx'
import s from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'
import 'app/styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: ReactNode
    open?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        open,
        onClose
    } = props
    const [isClosing, setIsClosing] = useState(false)
    const timerId = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerId.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (evt: React.MouseEvent) => {
        evt.stopPropagation()
    }
    const onKeyDawn = useCallback((evt: KeyboardEvent) => {
        if (evt.key === 'Escape') closeHandler()
    }, [closeHandler])

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', onKeyDawn)
        }
        return () => {
            clearTimeout(timerId.current)
            window.removeEventListener('keydown', onKeyDawn)
        }
    }, [onKeyDawn, open])

    return (
        <Portal>
            <div
                className={ clsx([
                    [theme],
                    s.modal,
                    { [s.modalOpened]: open },
                    { [s.modalClosing]: isClosing },
                    className
                ]) }
            >
                <div className={ clsx(s.overlay) } onClick={closeHandler} >
                    <div className={ clsx(s.content) } onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
