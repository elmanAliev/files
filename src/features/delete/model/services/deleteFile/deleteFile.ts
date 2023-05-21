import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { fileActions, getCurrentFile, getFiles } from "@/entities/File";
import { notifyError, notifySuccess } from "@/shared/helpers/toast";

interface Response {
    status: string;
}

export const deleteFile = createAsyncThunk<
    Response,
    void,
    ThunkConfig<string>
>(
    "delete/deleteFile",
    async (_, thunkApi) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkApi;
        const file = getCurrentFile(getState());

        try {
            const response = await extra.api.delete<Response>(`/media/${file?.id}`);

            if (!response.data) {
                throw new Error();
            }

            // закрываем toolbar
            dispatch(fileActions.togleToolbar(false));
            notifySuccess("Файл успешно удален");

            // обновляем список файлов
            dispatch(getFiles());
            
            return response.data;
        } catch (e) {
            notifyError("Ошибка при удалении файла");
            return rejectWithValue("Ошибка при удалении файла");
        }
    },
);
