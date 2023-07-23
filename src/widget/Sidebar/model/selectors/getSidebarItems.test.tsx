import { StateSchema } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routre/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { getSidebarItems } from './getSidebarItems';

describe('getSidebarItems.test', () => {
    test('with auth', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: { avatar: '1', id: '1', username: 'nurzhan' },
            },
        };
        expect(getSidebarItems(state as StateSchema)).toEqual([
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
            {
                path: `${RoutePath.profile}1`,
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
        ]);
    });
    test('without auth', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getSidebarItems(state as StateSchema)).toEqual([
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
        ]);
    });
});
