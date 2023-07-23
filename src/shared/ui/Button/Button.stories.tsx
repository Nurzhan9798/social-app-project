import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonColor, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
};

export const FilledDarkMode = Template.bind({});
FilledDarkMode.args = {
    children: 'Text',
};
FilledDarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledOrangeMode = Template.bind({});
FilledOrangeMode.args = {
    children: 'Text',
};
FilledOrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearDarkMode = Template.bind({});
ClearDarkMode.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearOrangeMode = Template.bind({});
ClearOrangeMode.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearOrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDarkMode = Template.bind({});
OutlineDarkMode.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineOrangeMode = Template.bind({});
OutlineOrangeMode.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineOrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const FilledRed = Template.bind({});
FilledRed.args = {
    children: 'Text',
    color: ButtonColor.RED,
};

export const FilledDarkModeRed = Template.bind({});
FilledDarkModeRed.args = {
    children: 'Text',
    color: ButtonColor.RED,
};
FilledDarkModeRed.decorators = [ThemeDecorator(Theme.DARK)];

export const FilledOrangeModeRed = Template.bind({});
FilledOrangeModeRed.args = {
    children: 'Text',
    color: ButtonColor.RED,
};
FilledOrangeModeRed.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OutlineRed = Template.bind({});
OutlineRed.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    color: ButtonColor.RED,
};

export const OutlineDarkModeRed = Template.bind({});
OutlineDarkModeRed.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    color: ButtonColor.RED,
};
OutlineDarkModeRed.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineOrangeModeRed = Template.bind({});
OutlineOrangeModeRed.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    color: ButtonColor.RED,
};
OutlineOrangeModeRed.decorators = [ThemeDecorator(Theme.ORANGE)];
