import { type ButtonHTMLAttributes, type FC } from 'react'
import clsx from 'clsx'
import s from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string
    className?: string
    theme?: ThemeButton
}

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
