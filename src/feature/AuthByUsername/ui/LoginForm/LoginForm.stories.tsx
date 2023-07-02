import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LightMode = Template.bind({});
LightMode.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
