import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleView } from 'entity/Article';

export const getArticlesPageLoading = (state: StateScheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.articlesPage?.view || ArticleView.CARD;
export const getArticlesPageNumber = (state: StateScheme) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateScheme) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateScheme) => state.articlesPage?.hasMore;
