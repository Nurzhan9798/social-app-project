import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ProfileValidationErrors } from '../../types/editableProfileCardSchema';
import { Profile } from '../../../../../entity/Profile/model/types/Profile';

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
            const response = await extra.api.put<Profile>(`/profile/${formData.id}`, formData);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue([ProfileValidationErrors.SERVER_ERROR]);
        }
    },
);
