import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entity/Profile';
import { loginFormReducer } from 'feature/AuthByUsername';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducers } from 'entity/Article';
import { addNewCommentReducers } from 'feature/AddNewComment';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginFormReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducers,
    addNewComment: addNewCommentReducers,
    articleDetailsPage: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
