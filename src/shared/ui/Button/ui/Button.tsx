import { ButtonHTMLAttributes, memo } from 'react'
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
    /**
     * Статус
     */
    disabled?: boolean
}

/**
 * Кнопка | UI компонент
 */
export const Button = memo((props: IButtonProps) => {
    const {
        className,
        label,
        children,
        theme = ThemeButton.CLEAR,
        disabled,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={clsx([s.button, s[theme], disabled && [s.disabled], className])}
            disabled={disabled}
        >
            {label}
            {children}
        </button>
    )
})
