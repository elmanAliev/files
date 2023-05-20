import { StateSchema } from '@/app/providers/StoreProvider';

export const getFilesIsLoading = (state: StateSchema) => state?.file?.isLoading;
export const getFilesError = (state: StateSchema) => state?.file?.error;
export const getToolbarState = (state: StateSchema) => state?.file?.toolBarOpened;
export const getCurrentFile = (state: StateSchema) => state?.file?.currentFile;
