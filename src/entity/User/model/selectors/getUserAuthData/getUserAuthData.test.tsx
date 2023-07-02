import { StateScheme } from 'app/providers/StoreProvider';
import { User } from 'entity/User';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('success', () => {
        const data: User = {
            id: '1',
            username: 'bakytov',
        };
        const state: DeepPartial<StateScheme> = {
            user: { authData: data },
        };
        expect(getUserAuthData(state as StateScheme)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getUserAuthData(state as StateScheme)).toEqual(undefined);
    });
});
