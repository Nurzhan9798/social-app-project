import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    size: number;
    src: string;
    alt: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
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
            className={cls.Avatar}
            src={src}
            style={style}
            alt={alt}
        />
    );
};
