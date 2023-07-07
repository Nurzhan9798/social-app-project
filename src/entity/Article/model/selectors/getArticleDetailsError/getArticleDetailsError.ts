import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateScheme) => state.articleDetails?.error;
