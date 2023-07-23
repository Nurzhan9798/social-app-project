import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000',
        alt: 'avatar',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {};

export const DarkMode = Template.bind({});
DarkMode.args = {};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightSmallMode = Template.bind({});
LightSmallMode.args = {
    size: 50,
};

export const DarkSmallMode = Template.bind({});
DarkSmallMode.args = {
    size: 50,
};
DarkSmallMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeSmallMode = Template.bind({});
OrangeSmallMode.args = {
    size: 50,
};
OrangeSmallMode.decorators = [ThemeDecorator(Theme.ORANGE)];
