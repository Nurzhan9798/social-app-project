import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsLoading = (state: StateSchema) => state.articleDetailsPage?.comment?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comment?.error;
