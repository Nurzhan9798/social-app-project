import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Something went wrong')}
        </div>
    );
};
