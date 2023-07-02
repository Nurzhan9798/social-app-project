import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('Readonly is true', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateScheme)).toEqual(true);
    });

    test('Readonly is false', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadonly(state as StateScheme)).toEqual(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileReadonly(state as StateScheme)).toEqual(false);
    });
});
