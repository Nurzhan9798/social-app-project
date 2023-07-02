import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileReadonly } from 'entity/Profile';
import { ProfileValidationErrors } from 'entity/Profile/model/types/Profile';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
    test('with some errors', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                validationErrors: [ProfileValidationErrors.SERVER_ERROR],
            },
        };
        expect(getProfileValidationErrors(state as StateScheme)).toEqual([ProfileValidationErrors.SERVER_ERROR]);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileValidationErrors(state as StateScheme)).toEqual(undefined);
    });
});
