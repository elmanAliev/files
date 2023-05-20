import { StateSchema } from '@/app/providers/StoreProvider';

export const getDeleteIsLoading = (state: StateSchema) => state?.delete?.isLoading;
export const getDeleteError = (state: StateSchema) => state?.delete?.error;
