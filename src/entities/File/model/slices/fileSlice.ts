import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getFiles } from '../../model/services/getFiles/getFiles';
import { File, FileSchema } from '../types/FileSchema';

const fileAdapter = createEntityAdapter<File>({
    selectId: (file) => file.id,
});

export const getFilesData = fileAdapter.getSelectors<StateSchema>(
    (state) => state.file || fileAdapter.getInitialState(),
);

const fileSlice = createSlice({
    name: 'fileSlice',
    initialState: fileAdapter.getInitialState<FileSchema>({
        isLoading: false,
        error: undefined,
        toolBarOpened: false,
        currentFile: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        togleToolbar: (state, action: PayloadAction<boolean>) => {
            state.toolBarOpened = action.payload;
        },
        setCurrentFile: (state, action: PayloadAction<File>) => {
            state.currentFile = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFiles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getFiles.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                fileAdapter.setAll(state, action.payload);   
            })
            .addCase(getFiles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: fileReducer,
    actions: fileActions,
} = fileSlice;
