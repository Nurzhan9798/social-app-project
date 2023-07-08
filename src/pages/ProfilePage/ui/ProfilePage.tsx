import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileAction,
    ProfileCard,
    profileReducer,
    getProfileValidationErrors,
    ProfileValidationErrors,
} from 'entity/Profile';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { Page } from 'widget/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileError = useSelector(getProfileError);
    const profileValidationErrors = useSelector(getProfileValidationErrors);
    const profileReadonly = useSelector(getProfileReadonly);

    const profileValidationErrorTranslates = {
        [ProfileValidationErrors.SERVER_ERROR]: t('Server error'),
        [ProfileValidationErrors.NO_DATA]: t('No data'),
        [ProfileValidationErrors.INCORRECT_USER_CURRENCY]: t('Incorrect currency'),
        [ProfileValidationErrors.INCORRECT_USER_COUNTRY]: t('Incorrect country'),
        [ProfileValidationErrors.INCORRECT_USER_AGE]: t('Incorrect age'),
        [ProfileValidationErrors.INCORRECT_USER_DATA]: t('Incorrect firstname or lastname'),
        [ProfileValidationErrors.INCORRECT_USER_USERNAME]: t('Incorrect username'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    const onFirstnameChange = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ firstname: value }));
    }, [dispatch]);
    const onLastnameChange = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onAgeChange = useCallback((value: string) => {
        if (!Number.isNaN(Number(value || 0))) {
            dispatch(profileAction.updateProfile({ age: Number(value || 0) }));
        }
    }, [dispatch]);
    const onCityChange = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ city: value }));
    }, [dispatch]);
    const onUsernameChange = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ username: value }));
    }, [dispatch]);
    const onAvatarChange = useCallback((value: string) => {
        dispatch(profileAction.updateProfile({ avatar: value }));
    }, [dispatch]);
    const onCurrencyChange = useCallback((currency: Currency) => {
        dispatch(profileAction.updateProfile({ currency }));
    }, [dispatch]);
    const onCountryChange = useCallback((country: Country) => {
        dispatch(profileAction.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <div className={classNames(cls.ProfilePage, {}, [className])}>
                    <ProfilePageHeader />
                    {
                        profileValidationErrors && profileValidationErrors.map((err) => (
                            <Text
                                key={err}
                                text={profileValidationErrorTranslates[err]}
                                theme={TextTheme.ERROR}
                            />
                        ))
                    }
                    <ProfileCard
                        data={profileForm}
                        isLoading={profileIsLoading}
                        error={profileError}
                        readonly={profileReadonly}
                        onFirstnameChange={onFirstnameChange}
                        onLastnameChange={onLastnameChange}
                        onAgeChange={onAgeChange}
                        onCityChange={onCityChange}
                        onUsernameChange={onUsernameChange}
                        onAvatarChange={onAvatarChange}
                        onCurrencyChange={onCurrencyChange}
                        onCountryChange={onCountryChange}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
