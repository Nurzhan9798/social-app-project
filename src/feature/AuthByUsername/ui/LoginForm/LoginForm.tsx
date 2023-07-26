import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginFormActions, loginFormReducer } from '../../model/slices/loginFormSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginFormReducer,
};

const LoginForm = (props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();

    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);
    const dispatch = useAppDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginFormActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginFormActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onLoginClick();
        }
    }, [onLoginClick]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <VStack
                align="start"
                gap="16"
                className={className}
            >
                <Text title={t('Authorization form')} />
                {error && <Text text={t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />}
                <Input
                    autoFocus
                    label={t('Username')}
                    placeholder={t('username')}
                    value={username}
                    onChange={onChangeUsername}
                    disabled={isLoading}
                    maxWidth
                />
                <Input
                    type="password"
                    label={t('Password')}
                    placeholder={t('password')}
                    value={password}
                    onChange={onChangePassword}
                    disabled={isLoading}
                    maxWidth
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </VStack>
        </DynamicModuleLoader>

    );
};

export default LoginForm;
