import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";

interface Response {
    status: string;
}

interface UploadFileProps {
    files: FileList;
}

export const uploadFile = createAsyncThunk<
    Response,
    UploadFileProps,
    ThunkConfig<string>
>(
    "uploadButton/uploadFile",
    async (files, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Response>("/media/upload", files);

            if (!response.data) {
                throw new Error();
            }
            
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при регистрации");
        }
    },
);
