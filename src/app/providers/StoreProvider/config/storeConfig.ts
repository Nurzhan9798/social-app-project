import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { loginFormReducer } from 'feature/AuthByUsername/model/slices/loginFormSlice';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginFormReducer,
    };
    return configureStore<StateScheme>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
