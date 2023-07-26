import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'entity/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';

const initialState: EditableProfileCardSchema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    form: undefined,
    error: undefined,
    validationErrors: undefined,
};

export const editableProfileCardSlice = createSlice({
    name: 'editableProfileCard',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        resetForm: (state) => {
            state.form = state.data;
            state.readonly = true;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.validationErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validationErrors = action.payload;
            });
    },
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
