import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        label: 'label',
        placeholder: 'placeholder',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
};

export const DarkMode = Template.bind({});
DarkMode.args = {
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {
};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeDisabled = Template.bind({});
LightModeDisabled.args = {
    disabled: true,
};

export const DarkModeDisabled = Template.bind({});
DarkModeDisabled.args = {
    disabled: true,
};
DarkModeDisabled.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeDisabled = Template.bind({});
OrangeModeDisabled.args = {
    disabled: true,
};
OrangeModeDisabled.decorators = [ThemeDecorator(Theme.ORANGE)];
