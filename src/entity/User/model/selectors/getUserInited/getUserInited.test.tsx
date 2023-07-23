import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited.test', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            user: { _inited: true },
        };
        expect(getUserInited(state as StateSchema)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserInited(state as StateSchema)).toEqual(undefined);
    });
});
