import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { fileActions, getCurrentFile } from "@/entities/File";
import { downloadFileHelper } from "@/shared/helpers/downloadFile";

export const downloadFile = createAsyncThunk<
    Blob,
    void,
    ThunkConfig<string>
>(
    "download/downloadFile",
    async (_, thunkApi) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkApi;
        const file = getCurrentFile(getState());

        try {
            const response = await extra.api.get<Blob>(`/media/${file?.id}`);

            if (!response.data) {
                throw new Error();
            }

            dispatch(fileActions.togleToolbar(false));
            downloadFileHelper(response.data, file?.fileName)
            
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при скачивании файла");
        }
    },
);
