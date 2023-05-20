import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { fileActions, getCurrentFile, getFiles } from "@/entities/File";

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

            dispatch(fileActions.togleToolbar(false));
            dispatch(getFiles())
            
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при удалении файла");
        }
    },
);
