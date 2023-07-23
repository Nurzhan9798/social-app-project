import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import React, { useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} width={20} height={20} />
            </Button>
            <pre>
                <code>
                    {text}
                </code>
            </pre>

        </div>
    );
};
