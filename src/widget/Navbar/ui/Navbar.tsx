import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userAction } from 'entity/User';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classnames?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { classnames } = props;
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onCloseAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const onOpenAuthModal = () => {
        setIsAuthModalOpen(true);
    };

    const logout = () => {
        dispatch(userAction.logout());
        navigate('/');
    };

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [classnames])}>
                <div className={classNames(cls.links, {}, [])}>
                    <Button onClick={logout}>{t('Logout')}</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [classnames])}>
            <div className={classNames(cls.links, {}, [])}>
                <Button onClick={onOpenAuthModal}>{t('Login')}</Button>
                {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />}
            </div>
        </div>
    );
});
