import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classnames?: string;
}

export function Navbar(props: NavbarProps) {
    const { classnames } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [classnames])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink to="/">Main</AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    );
}
