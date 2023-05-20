import { createSlice } from '@reduxjs/toolkit';
import { downloadFile } from '../services/downloadFile/downloadFile';
import { DownloadSchema } from '../types/DownloadSchema';

const initialState: DownloadSchema = {
    error: "",
    isLoading: false,
};

export const downloadSlice = createSlice({
    name: 'download',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(downloadFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(downloadFile.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(downloadFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: downloadActions } = downloadSlice;
export const { reducer: downloadReducer } = downloadSlice;
