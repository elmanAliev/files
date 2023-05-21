import { createSlice } from '@reduxjs/toolkit';
import { register } from '../services/register/register';
import { RegisterSchema } from '../types/RegisterSchema';

const initialState: RegisterSchema = {
    error: "",
    isLoading: false,
};

export const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registerActions } = RegisterSlice;
export const { reducer: registerReducer } = RegisterSlice;
