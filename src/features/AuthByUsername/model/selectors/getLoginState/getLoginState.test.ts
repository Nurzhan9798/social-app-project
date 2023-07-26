import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: undefined,
                username: 'nurzhan',
                isLoading: false,
                password: '123',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual({
            error: undefined,
            isLoading: false,
            password: '',
            username: '',
        });
    });
});
