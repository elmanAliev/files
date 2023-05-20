import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { downloadFile } from "../../model/services/downloadFile/downloadFile";
import { Button } from '@/shared/ui/Button/Button';

export const DownloadButton = () => {
    const dispatch = useAppDispatch();

    const handleDownload = () => {
        dispatch(downloadFile())
    };

    return (
        <Button onClick={handleDownload} theme="white">Скачать</Button>
    );
};
