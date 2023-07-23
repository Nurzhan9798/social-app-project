import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import RenderIcon from 'shared/assets/icons/profile.svg';
import { Icon } from './Icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        Svg: RenderIcon,
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
    children: 'Text',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    children: 'Text',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {
    children: 'Text',
};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeWithClickable = Template.bind({});
LightModeWithClickable.args = {
    clickable: true,
};

export const DarkModeWithClickable = Template.bind({});
DarkModeWithClickable.args = {
    clickable: true,
};
DarkModeWithClickable.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeWithClickable = Template.bind({});
OrangeModeWithClickable.args = {
    clickable: true,
};
OrangeModeWithClickable.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightModeSmall = Template.bind({});
LightModeSmall.args = {
    width: 20,
    height: 20,
};

export const DarkModeSmall = Template.bind({});
DarkModeSmall.args = {
    width: 20,
    height: 20,
};
DarkModeSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeModeSmall = Template.bind({});
OrangeModeSmall.args = {
    width: 20,
    height: 20,
};
OrangeModeSmall.decorators = [ThemeDecorator(Theme.ORANGE)];
