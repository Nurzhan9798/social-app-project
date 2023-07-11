import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from 'entity/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const LightMode = Template.bind({});
LightMode.decorators = [
    StoreDecorator({
        articlesPage: {
            sort: ArticleSortField.TITLE,
            order: 'asc',
            type: ArticleType.SCIENCE,
            view: ArticleView.LIST,
            search: 'sfds',
        },
    }),
];
export const DarkMode = Template.bind({});
DarkMode.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articlesPage: {
            sort: ArticleSortField.TITLE,
            order: 'asc',
            type: ArticleType.SCIENCE,
            view: ArticleView.LIST,
            search: 'sfds',
        },
    }),
];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
        articlesPage: {
            sort: ArticleSortField.TITLE,
            order: 'asc',
            type: ArticleType.SCIENCE,
            view: ArticleView.LIST,
            search: 'sfds',
        },
    }),
];
