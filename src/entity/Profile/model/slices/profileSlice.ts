import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme } from '../types/Profile';

const initialState:ProfileScheme = {
    isLoading: false,
    readonly: false,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
