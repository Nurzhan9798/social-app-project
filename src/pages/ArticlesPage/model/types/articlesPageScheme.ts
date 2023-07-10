import { Article, ArticleView } from 'entity/Article';
import { EntityState } from '@reduxjs/toolkit';
import { ArticleSortField, ArticleType } from 'entity/Article/model/types/article';
import { SortOrder } from 'shared/types/SortOrder';

export interface ArticlesPageScheme extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    page: number;
    limit: number;
    hasMore: boolean;
    view: ArticleView;

    sort: ArticleSortField;
    order: SortOrder;
    search: string;

    type: ArticleType;
    _inited: boolean;
}
