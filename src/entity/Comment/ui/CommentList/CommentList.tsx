import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from 'entity/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                {isLoading && (
                    [1, 2].map((index) => (
                        <CommentCard
                            key={index}
                            isLoading
                            className={cls.commentCard}
                        />
                    ))
                )}
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            className={cls.commentCard}
                        />
                    ))
                    : <Text text={t('No comments')} />
            }
        </div>
    );
};
