import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {};

export const DarkMode = Template.bind({});
DarkMode.args = {};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];
