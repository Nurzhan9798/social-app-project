import { Button, ButtonColor, ButtonTheme } from 'shared/ui/Button/Button';
import React from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getProfileForm, getProfileReadonly, profileAction, updateProfileData,
} from 'entity/Profile';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { getUserAuthData } from 'entity/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const userData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileForm);
    const canEdit = userData?.id === profileData?.id;

    const onEditBtnClick = () => {
        dispatch(profileAction.setReadonly(false));
    };
    const onCancelBtnClick = () => {
        dispatch(profileAction.resetForm());
    };
    const onsaveBtnClick = () => {
        dispatch(updateProfileData());
    };

    return (
        <HStack
            justify="between"
            className={className}
        >
            <Text title={t('Profile card')} />
            {canEdit && (
                <HStack
                    gap="8"
                >
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEditBtnClick}
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    onClick={onCancelBtnClick}
                                    theme={ButtonTheme.OUTLINE}
                                    color={ButtonColor.RED}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    color={ButtonColor.GREEN}
                                    onClick={onsaveBtnClick}
                                >
                                    {t('Save')}
                                </Button>
                            </>
                        )}
                </HStack>
            )}
        </HStack>
    );
};
