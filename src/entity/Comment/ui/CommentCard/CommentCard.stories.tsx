import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Nurzhan',
                avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000',
            },
        },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const LightMode = Template.bind({});
export const LightModeLoading = Template.bind({});
LightModeLoading.args = {
    isLoading: true,
};

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkModeLoading = Template.bind({});
DarkModeLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeLoading.args = {
    isLoading: true,
};

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeModeLoading = Template.bind({});
OrangeModeLoading.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeLoading.args = {
    isLoading: true,
};
