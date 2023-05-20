import { StateSchema } from "@/app/providers/StoreProvider";

export const getUserInited = (state: StateSchema) => state.user.inited;
export const getUserAuthData = (state: StateSchema) => state.user.authData;
