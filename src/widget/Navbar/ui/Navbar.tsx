import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { LoginModal } from 'feature/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User/model/selectors/getUserAuthData/getUserAuthData';
import { userAction } from 'entity/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classnames?: string;
}

export function Navbar(props: NavbarProps) {
    const { classnames } = props;
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const onOpenAuthModal = () => {
        setIsAuthModalOpen(true);
    };

    const logut = () => {
        dispatch(userAction.logout());
    };

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [classnames])}>
                <div className={classNames(cls.links, {}, [])}>
                    <Button onClick={logut}>{t('Logout')}</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [classnames])}>
            <div className={classNames(cls.links, {}, [])}>
                <Button onClick={onOpenAuthModal}>{t('Login')}</Button>
                <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />
            </div>
        </div>
    );
}
