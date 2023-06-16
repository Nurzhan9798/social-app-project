import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entity/Profile/model/services/fetchProfileData/fetchProfileData';
import { Profile, ProfileScheme } from '../types/Profile';

const initialState:ProfileScheme = {
    isLoading: false,
    readonly: true,
    data: undefined,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });

        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
