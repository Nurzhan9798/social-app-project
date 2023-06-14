import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                label={t('Username')}
                placeholder={t('username')}
                autoFocus
            />
            <Input
                type="password"
                label={t('Password')}
                placeholder={t('password')}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
