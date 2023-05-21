import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { fileActions, getCurrentFile } from "@/entities/File";
import { downloadFileHelper } from "@/shared/helpers/downloadFile";
import { notifyError, notifySuccess } from "@/shared/helpers/toast";

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
            const response = await extra.api.get<Blob>(`/media/${file?.id}`, {
                responseType: 'blob',
            });

            if (!response.data) {
                throw new Error();
            }

            // закрываем toolbar
            dispatch(fileActions.togleToolbar(false));

            // скачиваем полученный файл
            downloadFileHelper(response.data, file?.fileName);
            
            notifySuccess("Файл успешно загружен");

            return response.data;
        } catch (e) {
            notifyError("Ошибка при скачивании файла");
            return rejectWithValue("Ошибка при скачивании файла");
        }
    },
);
