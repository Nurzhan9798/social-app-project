import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { validateProfileData } from './validateProfileData';
import { ProfileValidationErrors } from '../../types/editableProfileCardSchema';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toEqual([
            ProfileValidationErrors.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ProfileValidationErrors.INCORRECT_USER_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ProfileValidationErrors.INCORRECT_USER_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ProfileValidationErrors.INCORRECT_USER_DATA,
            ProfileValidationErrors.INCORRECT_USER_USERNAME,
            ProfileValidationErrors.INCORRECT_USER_AGE,
            ProfileValidationErrors.INCORRECT_USER_COUNTRY,
            ProfileValidationErrors.INCORRECT_USER_CURRENCY,
        ]);
    });
});
