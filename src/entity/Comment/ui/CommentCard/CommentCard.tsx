import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { HStack, VStack } from 'shared/ui/Stack';
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
            <VStack
                align="start"
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <HStack gap="8">
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={16} width={100} />
                </HStack>
                <Skeleton height={40} width="100%" />
            </VStack>
        );
    }

    return (
        <VStack
            align="start"
            gap="8"
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={RoutePath.profile + comment.user.id}
            >
                <HStack gap="8">
                    <Avatar size={30} src={comment.user.avatar} />
                    <Text title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
};
