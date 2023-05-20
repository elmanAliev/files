import cls from './UploadButton.module.scss';
import { ChangeEvent, useRef } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { uploadFile } from "../../model/services/uploadFile/uploadFile";
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';

export const UploadButton = () => {
    const text = `Загружено ${10} файлов`
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    // отправка файлов на сервер
    const handleUpload = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (target.files) {
            const result = await dispatch(uploadFile({filesArray: target.files}));

            // очищаем input, т.к. если файл, выбранный в предыдущий раз, 
            // идентичен файлу, выбранному в текущий раз, onChange на input не сработает
            if (result.meta.requestStatus === "fulfilled" && fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    // имитируем клик на input
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
            />
            <Button onClick={handleButtonClick}>Загрузить</Button>
            <Text text={text} />
        </div>
    );
};
