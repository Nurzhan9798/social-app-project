import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateScheme) => state.articleDetails?.isLoading || false;
