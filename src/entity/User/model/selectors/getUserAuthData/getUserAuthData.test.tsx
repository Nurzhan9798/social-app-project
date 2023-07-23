import { StateSchema } from 'app/providers/StoreProvider';
import { User } from 'entity/User';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('success', () => {
        const data: User = {
            id: '1',
            username: 'bakytov',
        };
        const state: DeepPartial<StateSchema> = {
            user: { authData: data },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
