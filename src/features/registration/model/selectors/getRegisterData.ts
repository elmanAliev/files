import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterIsLoading = (state: StateSchema) => state?.register?.isLoading;
export const getRegisterError = (state: StateSchema) => state?.register?.error;
