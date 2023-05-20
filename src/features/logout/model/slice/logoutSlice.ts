import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../services/logoutUser/logoutUser';
import { LogoutSchema } from '../..';

const initialState: LogoutSchema = {
    error: "",
    isLoading: false,
};

export const logoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: logoutActions } = logoutSlice;
export const { reducer: logoutReducer } = logoutSlice;
