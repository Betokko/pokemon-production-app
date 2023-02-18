import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...other
    } = props;

    return (
        <Link
            {...other}
            to={to}
            className={classNames(s.appLink, {}, [className, s[theme]])}
        >
            {children}
        </Link>
    );
};
