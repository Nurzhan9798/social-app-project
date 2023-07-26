import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entity/Profile';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ProfileValidationErrors } from '../../model/types/editableProfileCardSchema';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import {
    getProfileValidationErrors,
} from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { editableProfileCardActions, editableProfileCardReducer } from '../../model/slices/editableProfileCardSlice';

const reducers: ReducersList = {
    editableProfileCard: editableProfileCardReducer,
};
interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

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
        dispatch(editableProfileCardActions.updateProfile({ firstname: value }));
    }, [dispatch]);
    const onLastnameChange = useCallback((value: string) => {
        dispatch(editableProfileCardActions.updateProfile({ lastname: value }));
    }, [dispatch]);
    const onAgeChange = useCallback((value: string) => {
        if (!Number.isNaN(Number(value || 0))) {
            dispatch(editableProfileCardActions.updateProfile({ age: Number(value || 0) }));
        }
    }, [dispatch]);
    const onCityChange = useCallback((value: string) => {
        dispatch(editableProfileCardActions.updateProfile({ city: value }));
    }, [dispatch]);
    const onUsernameChange = useCallback((value: string) => {
        dispatch(editableProfileCardActions.updateProfile({ username: value }));
    }, [dispatch]);
    const onAvatarChange = useCallback((value: string) => {
        dispatch(editableProfileCardActions.updateProfile({ avatar: value }));
    }, [dispatch]);
    const onCurrencyChange = useCallback((currency: Currency) => {
        dispatch(editableProfileCardActions.updateProfile({ currency }));
    }, [dispatch]);
    const onCountryChange = useCallback((country: Country) => {
        dispatch(editableProfileCardActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                align="stretch"
                gap="16"
                className={className}
            >
                <EditableProfileCardHeader />
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
            </VStack>
        </DynamicModuleLoader>
    );
});
