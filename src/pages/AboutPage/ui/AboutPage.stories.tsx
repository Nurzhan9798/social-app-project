import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

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
