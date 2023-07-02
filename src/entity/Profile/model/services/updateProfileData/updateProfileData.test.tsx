import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { ProfileValidationErrors } from 'entity/Profile/model/types/Profile';
import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileValidationErrors.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileValidationErrors.INCORRECT_USER_DATA,
        ]);
    });
});
