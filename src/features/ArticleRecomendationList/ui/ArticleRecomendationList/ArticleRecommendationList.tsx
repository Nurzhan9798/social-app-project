import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entity/Article';
import { VStack } from 'shared/ui/Stack';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import cls from './ArticleRecomendationList.module.scss';
import {
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/articleRecommendations';
import {
    articleRecomendationListReducer,
    getArticleRecommendations,
} from '../../model/slices/articleRecomendationListSlice';

const reducers: ReducersList = {
    articleRecommendationList: articleRecomendationListReducer,
};
interface ArticleRecomendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecomendationListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const recommendationsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsList = useSelector(getArticleRecommendations.selectAll);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                align="stretch"
                gap="8"
                className={className}
            >
                <Text
                    title={t('Recommendations')}
                />
                <ArticleList
                    articles={recommendationsList}
                    isLoading={recommendationsLoading}
                    className={cls.recommendationList}
                    target="_blank"
                />
            </VStack>
        </DynamicModuleLoader>

    );
});
