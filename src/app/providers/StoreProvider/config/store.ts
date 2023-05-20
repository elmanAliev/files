import {
    ReducersMapObject,
    configureStore
} from '@reduxjs/toolkit';
import $api from '@/shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { registerReducer } from '@/features/registration';
import { loginReducer } from '@/features/login';
import { logoutReducer } from '@/features/logout';
import { uploadReducer } from '@/features/upload';
import { fileReducer } from '@/entities/File';
import { deleteReducer } from '@/features/delete';
import { downloadReducer } from '@/features/download';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        login: loginReducer, 
        register: registerReducer,
        logout: logoutReducer,
        upload: uploadReducer,
        delete: deleteReducer,
        download: downloadReducer,
        file: fileReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        })
    });   
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
