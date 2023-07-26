import { CommentCard } from 'entity/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
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
            <VStack
                align="start"
                gap="8"
                className={className}
            >
                {isLoading && (
                    [1, 2].map((index) => (
                        <CommentCard
                            key={index}
                            isLoading
                        />
                    ))
                )}
            </VStack>
        );
    }

    return (
        <VStack
            align="start"
            gap="8"
            className={className}
        >
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                        />
                    ))
                    : <Text text={t('No comments')} />
            }
        </VStack>
    );
};
