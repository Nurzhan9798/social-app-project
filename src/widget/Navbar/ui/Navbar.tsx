import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    classnames?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { classnames } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [classnames])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink to="/" >Main</AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    );
};

