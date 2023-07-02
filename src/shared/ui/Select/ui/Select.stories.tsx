import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select, SelectTheme } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        label: 'Select',
        options: [
            {
                value: '1',
                content: '1',
            },
            {
                value: '2',
                content: '2',
            },
            {
                value: '3',
                content: '3',
            },
        ],
        theme: SelectTheme.NORMAL,
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {};

export const DarkMode = Template.bind({});
DarkMode.args = {};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeClear = Template.bind({});
LightModeClear.args = {
    label: null,
    theme: SelectTheme.CLEAR,
};

export const DarkModeClear = Template.bind({});
DarkModeClear.args = {
    label: null,
    theme: SelectTheme.CLEAR,
};
DarkModeClear.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeClear = Template.bind({});
OrangeModeClear.args = {
    label: null,
    theme: SelectTheme.CLEAR,
};
OrangeModeClear.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeReadonly = Template.bind({});
LightModeReadonly.args = {
    readonly: true,
};

export const DarkModeReadonly = Template.bind({});
DarkModeReadonly.args = {
    readonly: true,
};
DarkModeReadonly.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeReadonly = Template.bind({});
OrangeModeReadonly.args = {
    readonly: true,
};
OrangeModeReadonly.decorators = [ThemeDecorator(Theme.ORANGE)];
