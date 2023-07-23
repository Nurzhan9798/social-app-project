import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routre/routeConfig';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton className={cls.comment} height={40} width="100%" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={RoutePath.profile + comment.user.id}
                className={cls.header}
            >
                <Avatar size={30} src={comment.user.avatar} />
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} className={cls.comment} />
        </div>
    );
};
