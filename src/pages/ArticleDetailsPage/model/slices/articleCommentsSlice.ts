import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entity/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentsSchema } from '../types/articleCommentsSchema';

const commentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments || commentAdapter.getInitialState(),
);

export const articleCommentsSlice = createSlice({
    name: 'articleComments',
    initialState: commentAdapter.getInitialState<ArticleCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleCommentsActions } = articleCommentsSlice;
export const { reducer: articleCommentsReducer } = articleCommentsSlice;
