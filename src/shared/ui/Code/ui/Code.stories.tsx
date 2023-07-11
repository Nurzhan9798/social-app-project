import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    args: {
        text: '<!DOCTYPE html>\n'
            + '<html>\n'
            + '  <body>\n'
            + '    <p id="hello"></p>\n'
            + '\n'
            + '    <script>\n'
            + '      document.getElementById("hello").innerHTML = "Hello, world!";\n'
            + '    </script>\n'
            + '  </body>\n'
            + '</html>;',
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const LightMode = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];
