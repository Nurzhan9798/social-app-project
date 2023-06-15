import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('with state', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: null,
                username: 'nurzhan',
                loading: false,
                password: '123',
            },
        };
        expect(getLoginState(state as StateScheme)).toEqual(state.loginForm);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginState(state as StateScheme)).toEqual({
            error: null,
            loading: false,
            password: '',
            username: '',
        });
    });
});
