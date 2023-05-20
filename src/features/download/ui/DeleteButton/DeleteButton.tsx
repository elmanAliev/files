import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { deleteFile } from "../../model/services/downloadFile/downloadFile";
import { Button } from '@/shared/ui/Button/Button';

export const DeleteButton = () => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteFile())
    };

    return (
        <Button onClick={handleDelete} theme="white">Удалить</Button>
    );
};
