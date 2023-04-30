import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import clsx from 'clsx'
import s from './AppLink.module.scss'

export enum ThemeAppLink {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: ThemeAppLink
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = ThemeAppLink.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link
            {...otherProps}
            to={to}
            className={clsx([s.appLink, s[theme], className])}
        >
            {children}
        </Link>
    )
}
