import { AppLink } from 'shared/ui/AppLink';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { Icon } from 'shared/ui/Icon';
import { SidebarItemType } from 'widget/Sidebar/model/types/sidebarItem';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink className={classNames(cls.item, { [cls.collapsed]: collapsed })} to={item.path}>
            <Icon Svg={item.Icon} className={cls.icon} width={20} height={20} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
