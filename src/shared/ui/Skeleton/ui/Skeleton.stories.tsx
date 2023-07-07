import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    args: {
        width: '100%',
        height: 250,
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const LightMode = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const CircleLight = Template.bind({});
CircleLight.args = {
    height: 100,
    width: 100,
    border: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
    height: 100,
    width: 100,
    border: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
    height: 100,
    width: 100,
    border: '50%',
};
CircleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
