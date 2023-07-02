import { User, UserScheme } from 'entity/User';
import { userAction, userSlice } from './userSlice';

describe('userSlice.test', () => {
    test('logout', () => {
        const state: DeepPartial<UserScheme> = {};
        expect(userSlice.reducer(
            state as UserScheme,
            userAction.logout(),
        )).toEqual({ authData: undefined });
    });

    test('setAuthData', () => {
        const state: DeepPartial<UserScheme> = {};
        const data: User = {
            username: 'bakytov',
            id: '1',
        };
        expect(userSlice.reducer(
            state as UserScheme,
            userAction.setAuthData(data),
        )).toEqual({ authData: data });
    });
});
