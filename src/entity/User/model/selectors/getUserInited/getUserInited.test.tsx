import { StateScheme } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited.test', () => {
    test('success', () => {
        const state: DeepPartial<StateScheme> = {
            user: { _inited: true },
        };
        expect(getUserInited(state as StateScheme)).toEqual(true);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getUserInited(state as StateScheme)).toEqual(undefined);
    });
});
