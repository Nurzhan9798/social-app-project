import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore<StateScheme>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
