import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state?.login?.isLoading;
export const getLoginError = (state: StateSchema) => state?.login?.error;
