import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from 'entity/Article';
import { StateScheme } from 'app/providers/StoreProvider';
import {
    ArticleDetailsRecomendationsScheme,
} from 'pages/ArticleDetailsPage/model/types/ArticleDetailsRecomendationsScheme';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recomendationsAdapter.getSelectors<StateScheme>(
    (state) => state.articleDetailsPage?.recommendations || recomendationsAdapter.getInitialState(),
);

export const articleDetailsRecomendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recomendationsAdapter.getInitialState<ArticleDetailsRecomendationsScheme>({
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
                recomendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecomendationsReducer } = articleDetailsRecomendationsSlice;
