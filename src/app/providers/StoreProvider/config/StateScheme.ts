import { CounterScheme } from 'entity/Counter';
import { UserScheme } from 'entity/User';
import { LoginFormScheme } from 'feature/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileScheme } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;

    // async reducers
    loginForm?: LoginFormScheme;
    profile?: ProfileScheme;
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
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: string;
    extra: ThunkExtraArgs;
}
