import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const LightMode = Template.bind({});
LightMode.args = {
    children: 'Text',
};
LightMode.decorators = [StoreDecorator({})];

export const DarkMode = Template.bind({});
DarkMode.args = {
    children: 'Text',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const OrangeMode = Template.bind({});
OrangeMode.args = {
    children: 'Text',
};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];
