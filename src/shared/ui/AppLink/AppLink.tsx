import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import clsx from "clsx";
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
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            {...otherProps}
            to={to}
            className={clsx([s.appLink, s[theme], className])}
        >
            {children}
        </Link>
    );
};
