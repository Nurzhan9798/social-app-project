import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('isLoading is true', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateScheme)).toEqual(true);
    });

    test('isLoading is false', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileIsLoading(state as StateScheme)).toEqual(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileIsLoading(state as StateScheme)).toEqual(false);
    });
});
