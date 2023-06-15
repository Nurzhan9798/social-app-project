import { StateScheme } from 'app/providers/StoreProvider';
import { LoginFormScheme } from 'feature/AuthByUsername';

const defaultLoginForm: LoginFormScheme = {
    username: '',
    password: '',
    loading: false,
    error: null,
};
export const getLoginState = (state: StateScheme) => state?.loginForm || defaultLoginForm;
