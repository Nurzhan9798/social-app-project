import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    FILLED = 'filled'
}

export enum ButtonColor {
    PRIMARY = 'primary',
    RED = 'red',
    GREEN = 'green'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    disabled?: boolean;
    color?: ButtonColor;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.FILLED,
        color = ButtonColor.PRIMARY,
        disabled,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme], cls[color]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
