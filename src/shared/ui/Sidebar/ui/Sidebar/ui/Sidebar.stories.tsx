import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'shared/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
    children: 'Text',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    children: 'Text',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];
