import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entity/Profile';
import { validateProfileData } from 'entity/Profile/model/services/validateProfileData/validateProfileData';
import { Profile, ProfileValidationErrors } from '../../types/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ProfileValidationErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            return rejectWithValue([ProfileValidationErrors.SERVER_ERROR]);
        }
    },
);
