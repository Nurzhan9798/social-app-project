import { LoginFormSchema } from '../types/LoginForm';
import { loginFormActions, loginFormReducer } from './loginFormSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginFormSchema> = { username: '123' };
        expect(loginFormReducer(
            state as LoginFormSchema,
            loginFormActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginFormSchema> = { password: '123' };
        expect(loginFormReducer(
            state as LoginFormSchema,
            loginFormActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
