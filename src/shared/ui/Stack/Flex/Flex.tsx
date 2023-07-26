import { classNames } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const directionClasses: Record<FlexDirection, string> = {
    column: cls.column,
    row: cls.row,
};

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    around: cls.justifyAround,
    evenly: cls.justifyEvenly,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    stretch: cls.alignStretch,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    direction?: FlexDirection;
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        direction = 'row',
        justify = 'start',
        align = 'center',
        gap,
        max,
        children,
    } = props;

    const additionalClasses = [
        className,
        directionClasses[direction],
        justifyClasses[justify],
        alignClasses[align],
        gap && gapClasses[gap],
    ];

    return (
        <div className={classNames(cls.Flex, { [cls.max]: max }, additionalClasses)}>
            {children}
        </div>
    );
};
