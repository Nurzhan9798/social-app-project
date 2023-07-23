import { User, UserSchema } from 'entity/User';
import { userAction, userSlice } from './userSlice';

describe('userSlice.test', () => {
    test('logout', () => {
        const state: DeepPartial<UserSchema> = {};
        expect(userSlice.reducer(
            state as UserSchema,
            userAction.logout(),
        )).toEqual({ authData: undefined });
    });

    test('setAuthData', () => {
        const state: DeepPartial<UserSchema> = {};
        const data: User = {
            username: 'bakytov',
            id: '1',
        };
        expect(userSlice.reducer(
            state as UserSchema,
            userAction.setAuthData(data),
        )).toEqual({ authData: data });
    });
});
