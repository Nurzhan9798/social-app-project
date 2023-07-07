import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entity/User';
import { RoutePath } from 'shared/config/routre/routeConfig';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebarItem';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: HomeIcon,
                text: 'Main',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },

);
