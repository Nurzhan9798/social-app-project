import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleCommentsLoading = (state: StateScheme) => state.articleDetailsPage?.comment?.isLoading || false;
export const getArticleCommentsError = (state: StateScheme) => state.articleDetailsPage?.comment?.error;
