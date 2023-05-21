import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { fileActions, getCurrentFile } from "@/entities/File";

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

            const blob = new Blob([response.data]);
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file?.fileName || "new file");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url)
            
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при скачивании файла");
        }
    },
);
