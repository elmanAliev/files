import { createAsyncThunk} from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { userActions } from "@/entities/User";

interface Response {
    status: string;
}

export const logoutUser = createAsyncThunk<
    Response,
    void,
    ThunkConfig<string>
>(
    "logout/logoutUser",
    async (_, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Response>("/logout");

            if (!response.data) {
                throw new Error();
            }

            // удаляем token и устанавливаем authData = undefined, 
            // для того чтобы страница профиля была недоступна
            dispatch(userActions.logout());
            
            return response.data;
        } catch (e) {
            return rejectWithValue("Ошибка при разавторизации");
        }
    },
);
