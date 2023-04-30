import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'
import s from './Button.module.scss'

export enum ThemeButton {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    CLEAR = 'clear'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Название кнопки
     */
    label?: string | JSX.Element
    /**
     * Передаваемый в кнопку класс
     */
    className?: string
    /**
     * Тема кнопки
     */
    theme?: ThemeButton
}

/**
 * Кнопка | UI компонент
 */
export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        label,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={clsx([s.button, s[theme], className])}
        >
            {label}
            {children}
        </button>
    )
}
