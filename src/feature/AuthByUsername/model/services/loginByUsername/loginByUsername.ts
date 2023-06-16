import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userAction } from 'entity/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            console.log(response.data);
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            dispatch(userAction.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
