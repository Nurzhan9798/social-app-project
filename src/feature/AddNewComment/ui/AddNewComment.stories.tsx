import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import AddNewComment from './AddNewComment';

export default {
    title: 'features/AddNewComment',
    component: AddNewComment,
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />;

export const LightMode = Template.bind({});
LightMode.decorators = [StoreDecorator({})];

export const DarkMode = Template.bind({});
DarkMode.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({}),
];
