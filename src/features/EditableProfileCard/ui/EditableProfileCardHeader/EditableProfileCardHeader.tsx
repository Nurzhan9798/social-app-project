import { Text } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { Button, ButtonColor, ButtonTheme } from 'shared/ui/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { editableProfileCardActions } from '../../model/slices/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const userData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileForm);
    const canEdit = userData?.id === profileData?.id;

    const onEditBtnClick = () => {
        dispatch(editableProfileCardActions.setReadonly(false));
    };
    const onCancelBtnClick = () => {
        dispatch(editableProfileCardActions.resetForm());
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
