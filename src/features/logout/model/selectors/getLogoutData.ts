import { StateSchema } from '@/app/providers/StoreProvider';

export const getLogoutIsLoading = (state: StateSchema) => state?.logout?.isLoading;
export const getLogoutError = (state: StateSchema) => state?.logout?.error;
