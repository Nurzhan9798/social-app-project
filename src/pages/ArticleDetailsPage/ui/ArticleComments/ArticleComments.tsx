import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { AddNewComment } from 'features/AddNewComment';
import { CommentList } from 'entity/Comment';
import { VStack } from 'shared/ui/Stack';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getArticleCommentsError, getArticleCommentsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleCommentsProps {
    className?: string;
    articleId: string;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleCommentsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
        dispatch(fetchCommentsByArticleId(articleId));
    }, [dispatch, articleId]);

    return (
        <VStack
            align="stretch"
            gap="16"
            className={className}
        >
            <Text
                title={t('Comments')}
            />
            <AddNewComment onSendComment={onSendComment} />
            <CommentList
                comments={comments}
                isLoading={commentsLoading}
            />
        </VStack>
    );
});
