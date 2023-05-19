import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterName = (state: StateSchema) => state?.register?.name || '';
export const getRegisterEmail = (state: StateSchema) => state?.register?.email || '';
export const getRegisterPassword = (state: StateSchema) => state?.register?.password || '';
export const getRegisterIsLoading = (state: StateSchema) => state?.register?.isLoading;
export const getRegisterError = (state: StateSchema) => state?.register?.error;
