import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    size: number;
    src: string;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        size,
        src,
        alt,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={style}
            alt={alt}
        />
    );
};
