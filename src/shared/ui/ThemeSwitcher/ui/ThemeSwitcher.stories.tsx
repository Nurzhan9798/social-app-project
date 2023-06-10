import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const LightMode = Template.bind({});
LightMode.args = {
    children: 'Text',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    children: 'Text',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];
