import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { getAddNewCommentText } from '../model/selectors/addNewCommentSelectors';
import { addNewCommentActions, addNewCommentReducers } from '../model/slices/addNewCommentSlice';
import cls from './AddNewComment.module.scss';

interface AddNewCommentProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducers,
};

const AddNewComment = (props: AddNewCommentProps) => {
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
            <HStack
                gap="8"
                max
                className={classNames(cls.AddNewComment, {}, [className])}
            >
                <Input
                    label={t('Add new comment')}
                    placeholder={t('Comment')}
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>

    );
};

export default AddNewComment;
