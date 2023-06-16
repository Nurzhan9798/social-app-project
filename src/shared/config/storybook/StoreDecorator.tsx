import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from 'entity/Profile';
import { loginFormReducer } from 'feature/AuthByUsername/model/slices/loginFormSlice';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginFormReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
