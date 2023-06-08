import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classnames?: string;
}

export function Navbar(props: NavbarProps) {
    const { classnames } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [classnames])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink to="/">{t('Main')}</AppLink>
                <AppLink to="/about">{t('About')}</AppLink>
            </div>
        </div>
    );
}
