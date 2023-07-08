import { Article, ArticleView } from 'entity/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageScheme extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    page: number;
    limit?: number;
    hasMore: boolean;
    view: ArticleView;
}