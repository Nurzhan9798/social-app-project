import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { SidebarItem } from 'widget/Sidebar/ui/SidebarItem';
import { SidebarItemsList, SidebarItemType } from 'widget/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { RoutePath } from 'shared/config/routre/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const userData = useSelector(getUserAuthData);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarList = useMemo(() => SidebarItemsList.map((item: SidebarItemType) => {
        if (item.path === RoutePath.profile && userData) {
            item.path += userData.id;
        }
        return (
            <SidebarItem
                collapsed={collapsed}
                item={item}
                key={item.path}
            />
        );
    }), [collapsed, userData]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={classNames(cls.items, {}, [])}>
                {sidebarList}
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
});
