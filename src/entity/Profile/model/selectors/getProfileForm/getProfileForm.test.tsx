import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('success', () => {
        const data = {
            lastname: 'Bakytov',
            firstname: 'Nurzhan',
            age: 23,
            currency: Currency.KZT,
            country: Country.Kazakhstan,
            city: '',
            username: '',
            avatar: '',
        };
        const state: DeepPartial<StateScheme> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateScheme)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});
