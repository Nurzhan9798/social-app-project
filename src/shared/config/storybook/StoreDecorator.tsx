import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginFormReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducers } from 'entity/Article';
import { addNewCommentReducers } from 'features/AddNewComment';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { articleCommentsReducer } from 'pages/ArticleDetailsPage';
import { editableProfileCardReducer } from 'features/EditableProfileCard';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginFormReducer,
    editableProfileCard: editableProfileCardReducer,
    articleDetails: articleDetailsReducers,
    addNewComment: addNewCommentReducers,
    articleComments: articleCommentsReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
