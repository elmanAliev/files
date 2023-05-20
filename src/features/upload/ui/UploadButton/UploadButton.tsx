import cls from './UploadButton.module.scss';
import { ChangeEvent, useRef } from "react";
import { useSelector } from 'react-redux';
import { useHref, useNavigate } from 'react-router-dom';
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { getRegisterEmail, getRegisterError, getRegisterIsLoading, getRegisterName, getRegisterPassword } from '../../model/selectors/getRegisterData';
import { uploadSlice } from "../../model/slice/uploadSlice";
import { uploadFile } from "../../model/services/uploadFile/uploadFile";
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { Loader } from '@/shared/ui/Loader/Loader';
import { AppLink } from '@/shared/ui/AppLink/AppLink';


export const UploadButton = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const handleUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (target.files) {
            dispatch(uploadFile({files: target.files}));
        }
    };

    const handleButtonClick = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // if (isLoading) {
    //     return (
    //         <div className={cls.registerForm}>
    //             <Loader />
    //         </div>
    //     )
    // }

    return (
        <div className={cls.uploadButton}>
            <input
                className={cls.input}
                type="file"
                ref={fileInputRef}
                onChange={handleUpload}
            />
            <Button className={cls.button} onClick={handleButtonClick}>Загрузить</Button>
        </div>
    );
};
