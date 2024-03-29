import { classNames } from 'shared/lib/classNames/classNames';
import {
    ArticleView, ArticleViewSelector, ArticleSortSelector, ArticleTypeTabs,
    ArticleSortField, ArticleType,
} from 'entity/Article';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types/SortOrder';
import { useDebounce } from 'shared/hooks/useDebounce';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const deboucedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onOrderChange = useCallback((value: SortOrder) => {
        dispatch(articlesPageActions.setOrder(value));
        fetchData();
    }, [dispatch, fetchData]);

    const onSortChange = useCallback((value: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(value));
        fetchData();
    }, [dispatch, fetchData]);

    const onSearchChange = useCallback((value: string) => {
        dispatch(articlesPageActions.setSearch(value));
        deboucedFetchData();
    }, [dispatch, deboucedFetchData]);

    const onTabClick = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <VStack
            align="stretch"
            gap="16"
            className={className}
        >
            <HStack justify="between">
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onSortChange={onSortChange}
                    onOrderChange={onOrderChange}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </HStack>
            <Input
                label={t('Search')}
                placeholder={t('Search')}
                value={search}
                onChange={onSearchChange}
            />
            <ArticleTypeTabs
                value={type}
                onChangeType={onTabClick}
            />
        </VStack>
    );
};
