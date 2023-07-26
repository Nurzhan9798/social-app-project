import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('Readonly is true', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('Readonly is false', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                readonly: false,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
});
