import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { register } from '../services/register/register';
import { RegisterSchema } from '../types/RegisterSchema';

const initialState: RegisterSchema = {
    name: "",
    email: "",
    password: "",
    error: "",
    isLoading: false,
};

export const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            state.error = "";
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
            state.error = "";
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
            state.error = "";
        },
    },
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
