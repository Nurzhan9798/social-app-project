import { useTranslation } from 'react-i18next';
import React, { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { HStack } from 'shared/ui/Stack';
import { Listbox } from 'shared/ui/Listbox/Listbox';

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

    const languageOptions = useMemo<SelectOption<string>[]>(() => [
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
        <HStack
            gap="4"
            className={className}
        >

            <Listbox
                options={languageOptions}
                value={t(i18n.language)}
                onChange={changeLanguage}
            />
        </HStack>
    );
});
