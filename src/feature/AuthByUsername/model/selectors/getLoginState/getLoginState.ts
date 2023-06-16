import { StateScheme } from 'app/providers/StoreProvider';
import { LoginFormScheme } from 'feature/AuthByUsername';

const defaultLoginForm: LoginFormScheme = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};
export const getLoginState = (state: StateScheme) => state?.loginForm || defaultLoginForm;
