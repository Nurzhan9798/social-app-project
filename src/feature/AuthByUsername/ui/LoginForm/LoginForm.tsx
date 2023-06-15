import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'feature/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginFormActions } from 'feature/AuthByUsername/model/slices/loginFormSlice';
import { useCallback, useEffect } from 'react';
import { loginByUsername } from 'feature/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
        username,
        password,
        loading,
        error,
    } = useSelector(getLoginState);
    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginFormActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginFormActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

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
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                label={t('Username')}
                placeholder={t('username')}
                value={username}
                onChange={onChangeUsername}
                disabled={loading}
            />
            <Input
                type="password"
                label={t('Password')}
                placeholder={t('password')}
                value={password}
                onChange={onChangePassword}
                disabled={loading}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={loading}
            >
                {t('Login')}
            </Button>
        </div>
    );
};
