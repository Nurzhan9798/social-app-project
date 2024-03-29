import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../types/addNewCommentSchema';

const initialState: AddNewCommentSchema = {
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
