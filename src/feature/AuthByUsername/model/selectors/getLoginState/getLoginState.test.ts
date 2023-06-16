import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('with state', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: undefined,
                username: 'nurzhan',
                isLoading: false,
                password: '123',
            },
        };
        expect(getLoginState(state as StateScheme)).toEqual(state.loginForm);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginState(state as StateScheme)).toEqual({
            error: undefined,
            isLoading: false,
            password: '',
            username: '',
        });
    });
});
