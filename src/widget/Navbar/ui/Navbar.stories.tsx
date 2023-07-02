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
LightMode.decorators = [StoreDecorator({})];

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];

export const LightWithAuthMode = Template.bind({});
LightWithAuthMode.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkWithAuthMode = Template.bind({});
DarkWithAuthMode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];

export const OrangeWithAuthMode = Template.bind({});
OrangeWithAuthMode.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({ user: { authData: {} } })];
