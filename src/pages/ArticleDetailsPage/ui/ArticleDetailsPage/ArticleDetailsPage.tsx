import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entity/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { Page } from 'widget/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationList } from 'features/ArticleRecomendationList';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleCommentsReducer } from '../../model/slices/articleCommentsSlice';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
    articleComments: articleCommentsReducer,
};
interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();

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
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <VStack
                    align="stretch"
                    gap="16"
                    className={className}
                >
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.backBtn}
                        onClick={backToList}
                    >
                        {t('Back to list')}
                    </Button>
                    <ArticleDetails articleId={id} />
                    <ArticleRecommendationList />
                    <ArticleComments articleId={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
