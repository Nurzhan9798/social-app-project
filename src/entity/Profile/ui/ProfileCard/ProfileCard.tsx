import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme, TextAlign } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from 'entity/Profile';
import React from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect, Country } from 'entity/Country';
import { CurrencySelect, Currency } from 'entity/Currency';
import { HStack, VStack } from 'shared/ui/Stack';
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
            <HStack
                align="center"
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                align="center"
                justify="center"
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try refreshing the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }
    return (
        <VStack
            align="start"
            gap="16"
            className={classNames(cls.ProfileCard, {}, [className])}
        >
            {data?.avatar && (
                <HStack
                    justify="center"
                    max
                >
                    <Avatar size={100} src={data.avatar} alt="" />
                </HStack>
            )}
            <HStack
                align="start"
                gap="16"
                max
                className={cls.content}
            >
                <VStack
                    align="start"
                    gap="16"
                    className={cls.contentDiv}
                >
                    <Input
                        disabled={readonly}
                        label={t('First name')}
                        placeholder={t('First name')}
                        value={data?.firstname}
                        onChange={onFirstnameChange}
                        maxWidth
                    />
                    <Input
                        disabled={readonly}
                        label={t('Last name')}
                        placeholder={t('Last name')}
                        value={data?.lastname}
                        onChange={onLastnameChange}
                        maxWidth
                    />
                    <Input
                        disabled={readonly}
                        label={t('Age')}
                        placeholder={t('Age')}
                        value={data?.age}
                        onChange={onAgeChange}
                        maxWidth
                    />
                    <Input
                        disabled={readonly}
                        label={t('City')}
                        placeholder={t('City')}
                        value={data?.city}
                        onChange={onCityChange}
                        maxWidth
                    />

                </VStack>
                <VStack
                    align="start"
                    gap="16"
                    className={cls.contentDiv}
                >
                    <Input
                        disabled={readonly}
                        label={t('Username')}
                        placeholder={t('Username')}
                        value={data?.username}
                        onChange={onUsernameChange}
                        maxWidth
                    />
                    <Input
                        disabled={readonly}
                        label={t('Link to avatar')}
                        placeholder={t('Link to avatar')}
                        value={data?.avatar}
                        onChange={onAvatarChange}
                        maxWidth
                    />
                    <CountrySelect
                        readonly={readonly}
                        value={data?.country}
                        maxWidth
                        onChange={onCountryChange}
                    />
                    <CurrencySelect
                        readonly={readonly}
                        value={data?.currency}
                        maxWidth
                        onChange={onCurrencyChange}
                    />
                </VStack>

            </HStack>
        </VStack>
    );
};
