import { UserSchema } from 'entity/User';
import { LoginFormSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entity/Article';
import { AddNewCommentSchema } from 'features/AddNewComment';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollRestorationSchema } from 'features/ScrollRestoration';
import { ArticleRecomendationListSchema } from 'features/ArticleRecomendationList';
import { ArticleCommentsSchema } from 'pages/ArticleDetailsPage';
import { EditableProfileCardSchema } from 'features/EditableProfileCard';

export interface StateSchema {
    user: UserSchema;
    scrollRestoration: ScrollRestorationSchema;

    // async reducers
    loginForm?: LoginFormSchema;
    editableProfileCard?: EditableProfileCardSchema;
    articleDetails?: ArticleDetailsSchema;

    articleComments?: ArticleCommentsSchema;
    articleRecommendationList?: ArticleRecomendationListSchema;
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
