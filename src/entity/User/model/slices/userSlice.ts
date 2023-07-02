import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserScheme } from 'entity/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

const initialState:UserScheme = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },

        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        },
    },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
