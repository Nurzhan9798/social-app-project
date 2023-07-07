import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateScheme) => state.articleDetails?.data;
