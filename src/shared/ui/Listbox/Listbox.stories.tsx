import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entity/Country';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    args: {
        label: 'select',
        options: [
            { value: Country.Armenia, content: Country.Armenia },
            { value: Country.Russia, content: Country.Russia },
            { value: Country.Belarus, content: Country.Belarus },
            { value: Country.Kazakhstan, content: Country.Kazakhstan },
            { value: Country.Ukraine, content: Country.Ukraine },
        ],
        value: Country.Kazakhstan,
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const LightMode = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];
