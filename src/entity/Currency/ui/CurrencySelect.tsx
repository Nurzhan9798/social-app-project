import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    return (
        <Listbox
            className={classNames('', {}, [className])}
            label={t('Currency')}
            defaultValue={t('Currency')}
            options={options}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
};
