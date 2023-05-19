import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

interface Response {
    status: string;
    token: string
}

interface LoginProps {
    email: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    Response,
    LoginProps,
    ThunkConfig<string>
>(
    "loginByUsername/login",
    async (loginData, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Response>("/login", loginData);

            if (!response.data) {
                throw new Error();
            }
            
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data.token));
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при авторизации");
        }
    },
);
