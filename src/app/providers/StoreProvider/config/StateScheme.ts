import { UserScheme } from 'entity/User';
import { LoginFormScheme } from 'feature/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileScheme } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entity/Article';
import { ArticlDetailsCommentsScheme, ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage';
import { AddNewCommentScheme } from 'feature/AddNewComment';
import { ArticlesPageScheme } from 'pages/ArticlesPage';
import { ScrollRestorationScheme } from 'feature/ScrollRestoration';

export interface StateScheme {
    user: UserScheme;
    scrollRestoration: ScrollRestorationScheme;

    // async reducers
    loginForm?: LoginFormScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;

    articleDetailsPage: ArticleDetailsPageScheme;
    addNewComment?: AddNewCommentScheme;
    articlesPage?: ArticlesPageScheme;
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>,
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>,
    add: (key: StateSchemeKey, reducer: Reducer) =>void,
    remove: (key: StateSchemeKey) =>void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    state: StateScheme;
}
