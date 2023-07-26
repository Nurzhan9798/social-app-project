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
    maxWidth?: boolean;
}

export const Listbox = memo(<T extends string>(props: ListboxProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        defaultValue,
        maxWidth,
        onChange,
    } = props;

    return (
        <HListbox
            value={value}
            onChange={onChange}
            disabled={readonly}
            as="div"
            className={classNames(cls.Listbox, { [cls.maxWidth]: maxWidth }, [className])}
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
                                {option.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
});
