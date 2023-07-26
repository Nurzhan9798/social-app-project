import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Profile } from 'entity/Profile';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import ProfilePage from './ProfilePage';

const editableProfileCard: Profile = {
    username: 'bakytov',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Bakytov',
    firstname: 'Nurzhan',
    avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000',
    currency: Currency.KZT,
    city: 'Aktau',
};
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        editableProfileCard: {
            form: editableProfileCard,
            data: editableProfileCard,
            readonly: true,
        },
    })],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const LightMode = Template.bind({});
export const DarkMode = Template.bind({});
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeMode = Template.bind({});
OrangeMode.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightWithLoadingMode = Template.bind({});
LightWithLoadingMode.decorators = [StoreDecorator({
    editableProfileCard: { isLoading: true, readonly: true },
})];
export const DarkWithLoadingMode = Template.bind({});
DarkWithLoadingMode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    editableProfileCard: { isLoading: true, readonly: true },
})];

export const OrangeWithLoadingMode = Template.bind({});
OrangeWithLoadingMode.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    editableProfileCard: { isLoading: true, readonly: true },
})];

export const LightWithErrorMode = Template.bind({});
LightWithErrorMode.decorators = [StoreDecorator({
    editableProfileCard: { error: 'error', readonly: true },
})];
export const DarkWithErrorMode = Template.bind({});
DarkWithErrorMode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    editableProfileCard: { error: 'error', readonly: true },
})];

export const OrangeWithErrorMode = Template.bind({});
OrangeWithErrorMode.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    editableProfileCard: { error: 'error', readonly: true },
})];
