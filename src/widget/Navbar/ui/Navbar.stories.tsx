import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

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
