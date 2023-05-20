import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uploadFile } from '../services/uploadFile/uploadFile';
import { UploadSchema } from '../types/UploadSchema';

const initialState: UploadSchema = {
    name: "",
    email: "",
    password: "",
    error: "",
    isLoading: false,
};

export const uploadSlice = createSlice({
    name: 'upload',
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
            .addCase(uploadFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(uploadFile.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: uploadActions } = uploadSlice;
export const { reducer: uploadReducer } = uploadSlice;
