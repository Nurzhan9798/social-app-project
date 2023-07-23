import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entity/Article';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/const/localstorage';
import { ArticleSortField, ArticleType } from 'entity/Article/model/types/article';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticlesPageScheme } from '../..';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateScheme>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesPageAdapter.getInitialState<ArticlesPageScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        view: ArticleView.CARD,
        limit: 9,
        search: '',
        sort: ArticleSortField.CREATED,
        order: 'asc',
        type: ArticleType.ALL,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
