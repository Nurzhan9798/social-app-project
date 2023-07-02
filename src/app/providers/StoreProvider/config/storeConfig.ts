import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entity/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { StateScheme } from './StateScheme';

export function createReduxStore(
    initialState: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        user: userReducer,
    };

    const extraArg = {
        api: $api,
        navigate,
    };
    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                thunk: {
                    extraArgument: extraArg,
                },
            },
        ),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
