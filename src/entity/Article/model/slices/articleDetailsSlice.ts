import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleDetailsById } from '../services/fetchArticleDetailsById/fetchArticleDetailsById';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'article-details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetailsById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleDetailsById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleDetailsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducers } = articleDetailsSlice;
