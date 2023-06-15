import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entity/Profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                Profile Page
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
