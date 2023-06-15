import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary'
}

interface AppLinkProps extends LinkProps{
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames('', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
