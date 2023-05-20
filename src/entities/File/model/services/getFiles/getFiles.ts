import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { File } from '../../types/FileSchema';

interface Response {
    status: string;
    files: File[]
}

export const getFiles = createAsyncThunk<
    File[],
    void,
    ThunkConfig<string>
>(
    'profilePage/getFiles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
    
        try {
            const response = await extra.api.get<Response>("/media");
    
            if (!response.data) {
                throw new Error();
            }
                
            return response.data.files;
        } catch (e) {
            return rejectWithValue("Ошибка при получении списка файлов");
        }
    },
);
    