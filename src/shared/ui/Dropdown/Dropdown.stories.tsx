import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    args: {
        trigger: <Button>Menu</Button>,
        options: [
            {
                content: 'first',
                onClick: () => {},
                disabled: true,
            },
            {
                content: 'Second',
                onClick: () => {},
            },
            {
                content: 'thrid',
                onClick: () => {},
            },

        ],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const LightMode = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];
