import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {
    children: 'Lorem ipsum sdkla f da feoinvcsda loajf ak cdklocsadcsopdc asckjd cdkclndsc cajecn fdkclnkadsjc ecajd ceiacsdkcak s dcdjcnidasjc skadj ckjnlek ac dlakj dlkcadsc',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    children: 'Lorem ipsum sdkla f da feoinvcsda loajf ak cdklocsadcsopdc asckjd cdkclndsc cajecn fdkclnkadsjc ecajd ceiacsdkcak s dcdjcnidasjc skadj ckjnlek ac dlakj dlkcadsc',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.args = {
    children: 'Lorem ipsum sdkla f da feoinvcsda loajf ak cdklocsadcsopdc asckjd cdkclndsc cajecn fdkclnkadsjc ecajd ceiacsdkcak s dcdjcnidasjc skadj ckjnlek ac dlakj dlkcadsc',
};
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];
