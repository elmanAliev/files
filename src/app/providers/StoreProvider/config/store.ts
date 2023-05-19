import {
    ReducersMapObject,
    configureStore
} from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArg } from './StateSchema';
import { loginReducer } from '@/features/authByUsername';
import { registerReducer } from '@/features/registration';
import { $api } from '@/shared/api/api';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        login: loginReducer, 
        register: registerReducer
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
