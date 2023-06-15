import { AppLink } from 'shared/ui/AppLink';
import React, { memo } from 'react';
import { SidebarItemType } from 'widget/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    return (
        <AppLink className={classNames(cls.item, { [cls.collapsed]: collapsed })} to={item.path}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
