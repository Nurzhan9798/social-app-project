import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Select } from 'shared/ui/Select';
import { SelectTheme } from 'shared/ui/Select/ui/Select';
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
    const onChangeHandler = (value: string) => {
        onChange?.(value as Currency);
    };

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            theme={SelectTheme.NORMAL}
        />
    );
};
