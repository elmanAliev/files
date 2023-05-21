import cls from './FileList.module.scss';
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFiles } from "../../model/services/getFiles/getFiles";
import { fileActions, getFilesData } from "../../model/slices/fileSlice";
import { FileListItem } from "../FileListItem/FileListItem";
import { getFilesIsLoading, getToolbarState } from "../../model/selectors/getFileListData";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Toolbar } from '@/widgets/Toolbar';

export const FileList = () => {
    const files = useSelector(getFilesData.selectAll);
    const isLoading = useSelector(getFilesIsLoading);
    const isOpen = useSelector(getToolbarState);
    const dispatch = useAppDispatch();

    // закрываем toolbar
    const handleCloseToolbar = () => {
        dispatch(fileActions.togleToolbar(false))
    }

    // при рендере компонента, делаем запрос на получение списка файлов
    useEffect(() => {
        dispatch(getFiles());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div><Loader /></div>
        )
    }

    return (
        <>
            <div className={cls.fileList}>
                {files?.map( file => (
                    <FileListItem
                        key={file.id}
                        file={file}
                    />
                ))}
            </div>
            <Toolbar 
                isOpen={isOpen}
                onClose={handleCloseToolbar}
            />
        </>
    );
};
