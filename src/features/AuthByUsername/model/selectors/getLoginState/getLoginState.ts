import { StateSchema } from 'app/providers/StoreProvider';
import { LoginFormSchema } from '../../types/LoginForm';

const defaultLoginForm: LoginFormSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};
export const getLoginState = (state: StateSchema) => state?.loginForm || defaultLoginForm;
