import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './Text.module.scss'

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: ThemeText
}

export const Text: FC<TextProps> = (props) => {
    const { className, title, text, theme = ThemeText.PRIMARY } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.text, s[theme], className])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    )
}
