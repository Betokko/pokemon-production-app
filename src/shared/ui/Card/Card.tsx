import { HTMLAttributes, memo, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props

    return (
        <div {...otherProps} className={clsx([s.Card, className])}>
            {children}
        </div>
    )
})
