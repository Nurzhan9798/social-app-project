import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonColor } from 'shared/ui/Button/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entity/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entity/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from 'entity/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { Loader } from 'shared/ui/Loader';
import { profileAction, profileReducer } from 'entity/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileData);

    const profileIsLoading = useSelector(getProfileIsLoading);
    const profileError = useSelector(getProfileError);
    const profileReadonly = useSelector(getProfileReadonly);

    const onEditBtnClick = () => {
        dispatch(profileAction.setReadonly(false));
    };

    const onCancelBtnClick = () => {
        dispatch(profileAction.setReadonly(true));
    };

    if (profileIsLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <Text title={t('Profile card')} />
            {profileReadonly ? 'readonly' : 'not readonly'}
            <div className={cls.header}>
                {profileReadonly
                    && (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEditBtnClick}
                        >
                            {t('Edit')}
                        </Button>
                    )}
                {!profileReadonly
                    && (
                        <>
                            <Button
                                onClick={onCancelBtnClick}
                                theme={ButtonTheme.OUTLINE}
                                color={ButtonColor.RED}
                            >
                                {t('Cancel')}
                            </Button>
                            {/* AVATAR */}
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                color={ButtonColor.GREEN}
                            >
                                {t('Save')}
                            </Button>
                        </>
                    )}
            </div>
            <div className={cls.content}>
                {profileError && <Text theme={TextTheme.ERROR} text={profileError} />}
                <div className={cls.contentDiv}>
                    <Input
                        disabled={profileReadonly}
                        label={t('First name')}
                        placeholder={t('First name')}
                        value={profileData?.first}
                    />
                    <Input
                        disabled={profileReadonly}
                        label={t('Last name')}
                        placeholder={t('Last name')}
                        value={profileData?.lastname}
                    />
                    <Input
                        disabled={profileReadonly}
                        label={t('Age')}
                        placeholder={t('Age')}
                        value={profileData?.age}
                    />
                    <Input
                        disabled={profileReadonly}
                        label={t('City')}
                        placeholder={t('City')}
                        value={profileData?.city}
                    />

                </div>
                <div className={cls.contentDiv}>
                    <Input
                        disabled={profileReadonly}
                        label={t('Username')}
                        placeholder={t('Username')}
                        value={profileData?.username}
                    />
                    <Input
                        disabled={profileReadonly}
                        label={t('Link to avatar')}
                        placeholder={t('Link to avatar')}
                        value={profileData?.avatar}
                    />
                    <Input
                        disabled={profileReadonly}
                        label={t('Currency')}
                        placeholder={t('Currency')}
                        value={profileData?.currency}
                    />
                    <Input
                        disabled={profileReadonly}
                        label={t('Country')}
                        placeholder={t('Country')}
                        value={profileData?.country}
                    />
                </div>
            </div>
        </div>
    );
};
