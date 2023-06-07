import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './Text.module.scss'

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: ThemeText
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const { className, title, text, theme = ThemeText.PRIMARY, align = TextAlign.LEFT } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.text, s[theme], s[align], className])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    )
})
