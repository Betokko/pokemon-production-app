import {
    ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import s from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
    } = props;

    const ANIMATION_DELAY = 300;

    const [isClosing, setIsClosing] = useState(false);
    const timerId = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerId.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (evt: MouseEvent) => {
        evt.stopPropagation();
    };
    const onKeyDown = useCallback((evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerId.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(s.modal, mods, [className, theme])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
