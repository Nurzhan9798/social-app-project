import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={close}
                >
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
