import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export enum SelectTheme {
    NORMAL = 'normal',
    CLEAR = 'clear',
}
export interface SelectOption {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    theme?: SelectTheme;
}

export const Select = (props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        theme = SelectTheme.CLEAR,
        onChange,
    } = props;

    const mods: Mods = {
        [cls.disabled]: readonly,
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={classNames(cls.SelectWrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}:`}</span>}
            <select
                className={classNames(cls.select, mods, [cls[theme]])}
                onChange={onChangeHandler}
                value={value}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
