import { memo, useCallback } from 'react';
import { ArticleList } from 'entity/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widget/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';

interface ArticlesPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const loading = useSelector(getArticlesPageLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticles.selectAll);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <VStack
                    align="stretch"
                    gap="16"
                    className={className}
                >
                    <ArticlesPageFilters />
                    <ArticleList
                        view={view}
                        isLoading={loading}
                        articles={articles}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
