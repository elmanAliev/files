import cls from './FileListItem.module.scss';
import { File } from "../../model/types/FileSchema";
import DocumentIcon from '@/shared/assets/icons/DocumentIcon.svg';
import ImageIcon from '@/shared/assets/icons/ImageIcon.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { fileActions } from '../../model/slices/fileSlice';

interface FileListItemProps {
    file: File
}

export const FileListItem = ({file}: FileListItemProps) => {
    const dispatch = useAppDispatch();

    // проверка на то, что файл является изображением
    const imgType = file.mimeType.includes("image");

    // при клике на файл открываем toolbar,
    // и устанавливаем в поле сurrentFile - текущий файл
    const handleOpenToolbar = () => {
        dispatch(fileActions.setCurrentFile(file))
        dispatch(fileActions.togleToolbar(true))
    }

    return (
        <div className={cls.fileListItem} onClick={handleOpenToolbar}>
            {imgType
                ? <Icon
                    Svg={ImageIcon}
                    className={cls.img} 
                />
                : <Icon 
                    Svg={DocumentIcon} 
                    className={cls.icon} 
                />                    
            }
            <p className={cls.text}>{file.name}</p>
        </div>
    );
};
