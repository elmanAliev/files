import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { getFiles } from "@/entities/File";
import { notifyError, notifySuccess } from "@/shared/helpers/toast";

interface Response {
    status: string;
}

interface UploadFileProps {
    filesArray: FileList;
}

export const uploadFile = createAsyncThunk<
    Response,
    UploadFileProps,
    ThunkConfig<string>
>(
    "uploadButton/uploadFile",
    async ({filesArray}, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Response>("/media/upload", filesArray,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (!response.data) {
                throw new Error();
            }

            notifySuccess("Файлы успешно загружены на сервер");
            dispatch(getFiles())
            
            return response.data;
        } catch (e) {
            notifyError("Ошибка при отправке файлов на сервер");
            return rejectWithValue("Ошибка при отправке файлов");
        }
    },
);
