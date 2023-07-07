import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentScheme } from 'feature/AddNewComment';

const initialState: AddNewCommentScheme = {
    text: '',
    error: undefined,
};
export const addNewCommentSlice = createSlice({
    name: 'addNewCommentSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducers } = addNewCommentSlice;
