import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

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
