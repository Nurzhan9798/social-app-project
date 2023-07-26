import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleRecommendationList?.isLoading;
};

export const getArticleRecommendationsError = (state: StateSchema) => state.articleRecommendationList?.error;
