import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        label,
        value,
        onChange,
        type,
        autoFocus,
        disabled = false,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {label && <p className={cls.label}>{`${label}:`}</p>}
            <input
                ref={ref}
                className={classNames(cls.input, mods, [])}
                disabled={disabled}
                type={type}
                value={value}
                onChange={handleOnChange}
                {...otherProps}
            />
        </div>
    );
});
