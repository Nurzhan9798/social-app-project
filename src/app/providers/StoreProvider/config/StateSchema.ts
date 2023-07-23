import { UserSchema } from 'entity/User';
import { LoginFormSchema } from 'feature/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entity/Article';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddNewCommentSchema } from 'feature/AddNewComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollRestorationSchema } from 'feature/ScrollRestoration';

export interface StateSchema {
    user: UserSchema;
    scrollRestoration: ScrollRestorationSchema;

    // async reducers
    loginForm?: LoginFormSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;

    articleDetailsPage: ArticleDetailsPageSchema;
    addNewComment?: AddNewCommentSchema;
    articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) =>void,
    remove: (key: StateSchemaKey) =>void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    state: StateSchema;
}
