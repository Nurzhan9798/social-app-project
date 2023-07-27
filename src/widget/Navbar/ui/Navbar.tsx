import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isAdmin, isManager, userAction,
} from 'entity/User';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownOption } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { LoginModal } from 'features/AuthByUsername';
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
    const isUserAdmin = useSelector(isAdmin);
    const isUserManager = useSelector(isManager);
    const isAdminPanelAvailable = isUserAdmin || isUserManager;
    const navigate = useNavigate();

    const onCloseAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const onOpenAuthModal = () => {
        setIsAuthModalOpen(true);
    };

    const logout = useCallback(() => {
        dispatch(userAction.logout());
        navigate('/');
    }, [dispatch, navigate]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [classnames])}>
                <div className={classNames(cls.links, {}, [])}>
                    <Dropdown
                        trigger={<Avatar size={30} src={authData.avatar} />}
                        options={[
                            ...(
                                isAdminPanelAvailable ? [{
                                    content: t('Admin Panel'),
                                    href: RoutePath.admin_panel,
                                }] : []
                            ),
                            {
                                content: t('Profile'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Logout'),
                                onClick: logout,
                            }]}
                        direction="bottom left"
                    />
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
