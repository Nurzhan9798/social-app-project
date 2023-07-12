import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage';
import {
    articleDetailsRecomendationsReducer,
} from './articleDetailsRecomendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
    comment: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecomendationsReducer,
});
