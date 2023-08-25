import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M } = props
    const { t } = useTranslation()

    return (
        <div className={clsx([s.text, s[theme], s[align], s[size], className])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    )
})
