import { DeepPartial } from '@reduxjs/toolkit';
import { LoginFormScheme } from '../types/LoginForm';
import { loginFormActions, loginFormReducer } from './loginFormSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginFormScheme> = { username: '123' };
        expect(loginFormReducer(
            state as LoginFormScheme,
            loginFormActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginFormScheme> = { password: '123' };
        expect(loginFormReducer(
            state as LoginFormScheme,
            loginFormActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
