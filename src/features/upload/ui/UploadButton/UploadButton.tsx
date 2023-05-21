import cls from './UploadButton.module.scss';
import { ChangeEvent, useRef } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { uploadFile } from "../../model/services/uploadFile/uploadFile";
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getFilesData } from '@/entities/File/model/slices/fileSlice';
import { validateUpload } from '@/shared/helpers/validateUpload';

export const UploadButton = () => {
    const allFiles = useSelector(getFilesData.selectAll);
    const text = allFiles.length ? `Загружено ${allFiles.length} файлов` : "Нет загруженных файлов";
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const handleUpload = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (target.files) {
            if (!validateUpload(target.files, allFiles.length)) {
                return
            }
            
            const result = await dispatch(uploadFile({filesArray: target.files}));

            if (result.meta.requestStatus === "fulfilled" && fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleButtonClick = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className={cls.uploadButton}>
            <input
                className={cls.input}
                type="file"
                ref={fileInputRef}
                onChange={handleUpload}
                multiple
            />
            <Button onClick={handleButtonClick}>Загрузить</Button>
            <Text text={text} />
        </div>
    );
};
