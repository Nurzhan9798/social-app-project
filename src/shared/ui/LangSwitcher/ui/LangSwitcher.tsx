import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher(props: LangSwitcherProps) {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button onClick={() => changeLanguage('kz')}>{t('kz')}</Button>
            <Button onClick={() => changeLanguage('en')}>{t('en')}</Button>
            <Button onClick={() => changeLanguage('ru')}>{t('ru')}</Button>
        </div>
    );
}
