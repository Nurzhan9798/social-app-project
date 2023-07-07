import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleCommentsLoading = (state: StateScheme) => state.articleDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: StateScheme) => state.articleDetailsComments?.error;
