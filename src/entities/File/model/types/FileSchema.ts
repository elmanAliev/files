import { EntityState } from '@reduxjs/toolkit';

export interface File {
    id: string, 
    name: string, 
    fileName: string, 
    mimeType: string, 
    url: string, 
    createdAt: string;
}

export interface FileSchema extends EntityState<File> {
    isLoading?: boolean;
    error?: string;
    toolBarOpened: boolean;
    currentFile?: File;
}
