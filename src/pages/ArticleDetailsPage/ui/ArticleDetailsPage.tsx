import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entity/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entity/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { AddNewComment } from 'feature/AddNewComment';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { Page } from 'widget/Page';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slices';
import { getArticleRecommendations } from '../model/slices/articleDetailsRecomendationsSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
import { getArticleCommentsError, getArticleCommentsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleCommentsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const recommendationsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsList = useSelector(getArticleRecommendations.selectAll);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const backToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.backBtn}
                        onClick={backToList}
                    >
                        {t('Back to list')}
                    </Button>
                    <ArticleDetails
                        articleId={id}
                    />
                    <Text
                        title={t('Recommendations')}
                    />
                    <ArticleList
                        articles={recommendationsList}
                        isLoading={recommendationsLoading}
                        className={cls.recommendationList}
                        target="_blank"
                    />
                    <Text
                        title={t('Comments')}
                    />
                    <AddNewComment onSendComment={onSendComment} />
                    <CommentList
                        comments={comments}
                        isLoading={commentsLoading}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
