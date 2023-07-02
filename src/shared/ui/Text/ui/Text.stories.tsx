import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextAlign, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
    text: 'Text',
    title: 'Title',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    text: 'Text',
    title: 'Title',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {
    text: 'Text',
    title: 'Title',
};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeError = Template.bind({});
LightModeError.args = {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
};

export const DarkModeError = Template.bind({});
DarkModeError.args = {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
};
DarkModeError.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeError = Template.bind({});
OrangeModeError.args = {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
};
OrangeModeError.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeCenter = Template.bind({});
LightModeCenter.args = {
    text: 'Text',
    title: 'Title',
    align: TextAlign.CENTER,
};

export const DarkModeCenter = Template.bind({});
DarkModeCenter.args = {
    text: 'Text',
    title: 'Title',
    align: TextAlign.CENTER,
};
DarkModeCenter.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeCenter = Template.bind({});
OrangeModeCenter.args = {
    text: 'Text',
    title: 'Title',
    align: TextAlign.CENTER,
};
OrangeModeCenter.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeRight = Template.bind({});
LightModeRight.args = {
    text: 'Text',
    title: 'Title',
    align: TextAlign.RIGHT,
};

export const DarkModeRight = Template.bind({});
DarkModeRight.args = {
    text: 'Text',
    title: 'Title',
    align: TextAlign.RIGHT,
};
DarkModeRight.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeRight = Template.bind({});
OrangeModeRight.args = {
    text: 'Text',
    title: 'Title',
    align: TextAlign.RIGHT,
};
OrangeModeRight.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeOnlyTitle = Template.bind({});
LightModeOnlyTitle.args = {
    title: 'Title',
};

export const DarkModeOnlyTitle = Template.bind({});
DarkModeOnlyTitle.args = {
    title: 'Title',
};
DarkModeOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeOnlyTitle = Template.bind({});
OrangeModeOnlyTitle.args = {
    title: 'Title',
};
OrangeModeOnlyTitle.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeOnlyText = Template.bind({});
LightModeOnlyText.args = {
    text: 'Text',
};

export const DarkModeOnlyText = Template.bind({});
DarkModeOnlyText.args = {
    text: 'Text',
};
DarkModeOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeOnlyText = Template.bind({});
OrangeModeOnlyText.args = {
    text: 'Text',
};
OrangeModeOnlyText.decorators = [ThemeDecorator(Theme.ORANGE)];
