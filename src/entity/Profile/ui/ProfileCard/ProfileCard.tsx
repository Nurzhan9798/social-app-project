import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme, TextAlign } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { Profile } from 'entity/Profile';
import React from 'react';
import { Avatar } from 'shared/ui/Avatar';
import { CountrySelect, Country } from 'entity/CountrySelect';
import { CurrencySelect, Currency } from 'entity/CurrencySelect';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    isLoading: boolean;
    data?: Profile;
    error?: string;
    readonly?: boolean;
    onFirstnameChange?: (value: string) => void;
    onLastnameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onUsernameChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCurrencyChange?: (value: Currency) => void;
    onCountryChange?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        isLoading,
        data,
        error,
        readonly,
        onFirstnameChange,
        onLastnameChange,
        onAgeChange,
        onCityChange,
        onUsernameChange,
        onAvatarChange,
        onCurrencyChange,
        onCountryChange,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try refreshing the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <div className={cls.avatar}>
                    <Avatar size={100} src={data.avatar} alt="" />
                </div>
            )}
            <div className={cls.content}>
                <div className={cls.contentDiv}>
                    <Input
                        disabled={readonly}
                        label={t('First name')}
                        placeholder={t('First name')}
                        value={data?.firstname}
                        onChange={onFirstnameChange}
                    />
                    <Input
                        disabled={readonly}
                        label={t('Last name')}
                        placeholder={t('Last name')}
                        value={data?.lastname}
                        onChange={onLastnameChange}
                    />
                    <Input
                        disabled={readonly}
                        label={t('Age')}
                        placeholder={t('Age')}
                        value={data?.age}
                        onChange={onAgeChange}
                    />
                    <Input
                        disabled={readonly}
                        label={t('City')}
                        placeholder={t('City')}
                        value={data?.city}
                        onChange={onCityChange}
                    />

                </div>
                <div className={cls.contentDiv}>
                    <Input
                        disabled={readonly}
                        label={t('Username')}
                        placeholder={t('Username')}
                        value={data?.username}
                        onChange={onUsernameChange}
                    />
                    <Input
                        disabled={readonly}
                        label={t('Link to avatar')}
                        placeholder={t('Link to avatar')}
                        value={data?.avatar}
                        onChange={onAvatarChange}
                    />
                    <CountrySelect
                        readonly={readonly}
                        value={data?.country}
                        onChange={onCountryChange}
                    />
                    <CurrencySelect
                        readonly={readonly}
                        value={data?.currency}
                        onChange={onCurrencyChange}
                    />
                </div>

            </div>
        </div>
    );
};
