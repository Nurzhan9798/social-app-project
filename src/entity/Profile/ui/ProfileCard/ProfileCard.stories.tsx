import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Profile } from 'entity/Profile';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { ProfileCard } from './ProfileCard';

const profile = {
    username: 'admin',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Bakytov',
    firstname: 'Nurzhan',
    city: 'Aktau',
    currency: Currency.KZT,
    avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000',
} as Profile;

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    args: {
        data: profile,
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const LightMode = Template.bind({});

export const LightModeLoading = Template.bind({});
LightModeLoading.args = {
    isLoading: true,
};

export const LightModeError = Template.bind({});
LightModeError.args = {
    error: 'error',
};
export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkModeLoading = Template.bind({});
DarkModeLoading.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeLoading.args = {
    isLoading: true,
};

export const DarkModeError = Template.bind({});
DarkModeError.decorators = [ThemeDecorator(Theme.DARK)];
DarkModeError.args = {
    error: 'error',
};

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeModeLoading = Template.bind({});
OrangeModeLoading.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeLoading.args = {
    isLoading: true,
};

export const OrangeModeError = Template.bind({});
OrangeModeError.decorators = [ThemeDecorator(Theme.ORANGE)];
OrangeModeError.args = {
    error: 'error',
};
