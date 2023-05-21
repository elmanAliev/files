import { createSlice } from '@reduxjs/toolkit';
import { deleteFile } from '../services/deleteFile/deleteFile';
import { DeleteSchema } from '../types/DeleteSchema';

const initialState: DeleteSchema = {
    error: "",
    isLoading: false,
};

export const deleteSlice = createSlice({
    name: 'delete',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(deleteFile.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: deleteActions } = deleteSlice;
export const { reducer: deleteReducer } = deleteSlice;
