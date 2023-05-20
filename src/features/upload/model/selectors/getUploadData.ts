import { StateSchema } from '@/app/providers/StoreProvider';

export const getUploadIsLoading = (state: StateSchema) => state?.upload?.isLoading;
export const getUploadError = (state: StateSchema) => state?.upload?.error;
