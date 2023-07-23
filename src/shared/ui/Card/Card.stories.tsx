import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    args: {
        children: <Text title="test" text="text text" />,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const LightMode = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeOutlined = Template.bind({});
LightModeOutlined.args = {
    theme: CardTheme.OUTLINED,
};

export const DarkModeOutlined = Template.bind({});
DarkModeOutlined.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeOutlined.args = {
    theme: CardTheme.OUTLINED,
};

export const OrangeModeOutlined = Template.bind({});
OrangeModeOutlined.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeOutlined.args = {
    theme: CardTheme.OUTLINED,
};
