import React, { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    readonly?: boolean;
    value?: Country;
    onChange?: (value: Country) => void;
    maxWidth?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        readonly,
        value,
        maxWidth,
        onChange,
    } = props;

    const { t } = useTranslation();

    return (
        <Listbox
            className={className}
            label={t('Country')}
            defaultValue={t('Country')}
            options={options}
            readonly={readonly}
            value={value}
            maxWidth={maxWidth}
            onChange={onChange}
        />
    );
};
