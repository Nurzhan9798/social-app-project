import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select } from 'shared/ui/Select';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        className,
    } = props;
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const languageOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'kz',
            content: t('kz'),
        },
        {
            value: 'en',
            content: t('en'),
        },
        {
            value: 'ru',
            content: t('ru'),
        },

    ], [t]);

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Select
                value={i18n.language}
                onChange={changeLanguage}
                options={languageOptions}
            />
        </div>
    );
});
