import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export enum SelectTheme {
    NORMAL = 'normal',
    CLEAR = 'clear',
}
export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
interface SelectProps<T extends string>{
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    theme?: SelectTheme;
}

export const Select = memo(<T extends string>(props: SelectProps<T>) => {
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
            onChange(e.target.value as T);
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
});
