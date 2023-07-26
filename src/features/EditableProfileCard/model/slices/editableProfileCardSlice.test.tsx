import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { EditableProfileCardSchema, ProfileValidationErrors } from '../types/editableProfileCardSchema';
import { editableProfileCardActions, editableProfileCardReducer } from './editableProfileCardSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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
describe('EditableProfileCardSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<EditableProfileCardSchema> = { readonly: false };
        expect(editableProfileCardReducer(
            state as EditableProfileCardSchema,
            editableProfileCardActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<EditableProfileCardSchema> = { data, form: { username: '' } };

        expect(editableProfileCardReducer(
            state as EditableProfileCardSchema,
            editableProfileCardActions.resetForm(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<EditableProfileCardSchema> = { form: { username: '123' } };

        expect(editableProfileCardReducer(
            state as EditableProfileCardSchema,
            editableProfileCardActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            validationErrors: [ProfileValidationErrors.SERVER_ERROR],
        };

        expect(editableProfileCardReducer(
            state as EditableProfileCardSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        };

        expect(editableProfileCardReducer(
            state as EditableProfileCardSchema,
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
