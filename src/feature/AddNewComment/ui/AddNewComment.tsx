import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback, useState } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { addNewCommentActions, addNewCommentReducers } from 'feature/AddNewComment/model/slices/addNewCommentSlice';
import { useSelector } from 'react-redux';
import { getAddNewCommentText } from 'feature/AddNewComment/model/selectors/addNewCommentSelectors';
import cls from './AddNewComment.module.scss';

interface AddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducers,
};

export const AddNewComment = (props: AddNewCommentProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        dispatch(addNewCommentActions.setText(''));
    }, [dispatch, text, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewComment, {}, [className])}>
                <Input
                    label={t('Add new comment')}
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
};
