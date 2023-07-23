import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../Button/Button';
import cls from './Listbox.module.scss';

export interface ListboxOption<T extends string> {
    value: T;
    content: string;
    disabled?: boolean;
}

interface ListboxProps<T extends string>{
    className?: string;
    label?: string;
    options?: ListboxOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    defaultValue?: string;
}

export const Listbox = memo(<T extends string>(props: ListboxProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
        defaultValue,
    } = props;

    return (
        <HListbox
            value={value}
            onChange={onChange}
            disabled={readonly}
            as="div"
            className={classNames(cls.Listbox, {}, [className])}
        >
            {label && <HListbox.Label>{label}</HListbox.Label>}
            <HListbox.Button as={Fragment}>
                <Button className={cls.button} disabled={readonly}>
                    {value ?? defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={cls.options}>
                {options && options.map((option) => (
                    <HListbox.Option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.selected]: selected,
                                }, [])}
                            >
                                {option.value}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
});
