import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, ArticleViewSelector } from 'entity/Article';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useCallback, useMemo } from 'react';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { SelectOption } from 'shared/ui/Select/ui/Select';
import { ArticleSortField, ArticleType } from 'entity/Article/model/types/article';
import { SortOrder } from 'shared/types/SortOrder';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { useDebounce } from 'shared/hooks/useDebounce';
import { ArticleSortSelector } from 'entity/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { Tabs } from 'shared/ui/Tabs';
import { TabItem } from 'shared/ui/Tabs/ui/Tabs';
import { ArticleTypeTabs } from 'entity/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
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
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.header}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onSortChange={onSortChange}
                    onOrderChange={onOrderChange}
                />
                <ArticleViewSelector
                    className={cls.view}
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
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
        </div>
    );
};
