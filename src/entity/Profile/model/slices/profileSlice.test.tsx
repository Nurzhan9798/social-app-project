import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import {
    profileAction, profileReducer, ProfileSchema, updateProfileData,
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
    id: '1',
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileAction.resetForm(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileAction.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validationErrors: [ProfileValidationErrors.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
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
