import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={() => changeLanguage('kz')}
            >
                {t('kz')}
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={() => changeLanguage('en')}
            >
                {t('en')}
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={() => changeLanguage('ru')}
            >
                {t('ru')}
            </Button>
        </div>
    );
});
