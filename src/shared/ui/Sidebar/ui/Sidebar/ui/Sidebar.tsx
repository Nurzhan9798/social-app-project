import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routre/routeConfig';
import HomeIcon from '../../../../../assets/icons/home.svg';
import AboutIcon from '../../../../../assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar(props: SidebarProps) {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <div className={classNames(cls.items, {}, [])}>
                <AppLink className={cls.item} to={RoutePath.main}>
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink className={cls.item} to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.FILLED}
                className={cls.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langSwitcher} />
            </div>
        </div>
    );
}
