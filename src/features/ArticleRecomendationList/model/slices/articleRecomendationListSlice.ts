import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from 'entity/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleRecomendationListSchema } from '../types/articleRecomendationListSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendationList || recommendationsAdapter.getInitialState(),
);

export const articleRecomendationListSlice = createSlice({
    name: 'articleRecomendationList',
    initialState: recommendationsAdapter.getInitialState<ArticleRecomendationListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleRecomendationListActions } = articleRecomendationListSlice;
export const { reducer: articleRecomendationListReducer } = articleRecomendationListSlice;
