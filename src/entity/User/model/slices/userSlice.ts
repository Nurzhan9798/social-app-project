import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from 'entity/User';

const initialState:UserScheme = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
