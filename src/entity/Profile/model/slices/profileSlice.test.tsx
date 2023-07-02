import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import {
    profileAction, profileReducer, ProfileScheme, updateProfileData,
} from 'entity/Profile';
import { ProfileValidationErrors } from 'entity/Profile/model/types/Profile';
import { profileSlice } from './profileSlice';

const data = {
    lastname: 'Bakytov',
    firstname: 'Nurzhan',
    age: 23,
    currency: Currency.KZT,
    country: Country.Kazakhstan,
    city: 'Aktau',
    username: 'nurzhan',
    avatar: 'src',
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileAction.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileAction.resetForm(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileAction.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validationErrors: [ProfileValidationErrors.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
