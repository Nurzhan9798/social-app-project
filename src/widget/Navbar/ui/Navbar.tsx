import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classnames?: string;
}

export function Navbar(props: NavbarProps) {
    const { classnames } = props;
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [classnames])}>
            <div className={classNames(cls.links, {}, [])}>
                <Button onClick={toggleModal}>{t('Login')}</Button>
                <Modal isOpen={isOpen} onClose={toggleModal}>
                    {t('Lorem')}
                </Modal>
            </div>
        </div>
    );
}
