import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";

interface Response {
    status: string;
}

interface RegisterProps {
    name: string;
    email: string;
    password: string;
}

export const register = createAsyncThunk<
    Response,
    RegisterProps,
    ThunkConfig<string>
>(
    "registration/register",
    async (registerData, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Response>("/register", registerData);

            if (!response.data) {
                throw new Error();
            }
            
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при регистрации");
        }
    },
);
