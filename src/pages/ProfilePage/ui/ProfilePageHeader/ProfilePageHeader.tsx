import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonColor } from 'shared/ui/Button/ui/Button';
import React from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getProfileForm, getProfileReadonly, profileAction, updateProfileData,
} from 'entity/Profile';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { getUserAuthData } from 'entity/User';
import cls from './ProfilePageHeader.module.scss';

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile card')} />
            {canEdit && (
                <div className={cls.buttons}>
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
                </div>
            )}
        </div>
    );
};
