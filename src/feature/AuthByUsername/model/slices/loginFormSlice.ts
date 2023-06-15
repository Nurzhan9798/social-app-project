import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormScheme } from 'feature/AuthByUsername/model/types/LoginForm';
import { loginByUsername } from 'feature/AuthByUsername/model/services/loginByUsername/loginByUsername';

const initialState: LoginFormScheme = {
    username: '',
    password: '',
    loading: false,
};
export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
