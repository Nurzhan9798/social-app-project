import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileValidationErrors } from '../../types/editableProfileCardSchema';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
    test('with some errors', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                validationErrors: [ProfileValidationErrors.SERVER_ERROR],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([ProfileValidationErrors.SERVER_ERROR]);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});
