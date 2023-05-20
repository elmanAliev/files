import cls from "./Toolbar.module.scss";
import { memo } from "react";
import Portal from "@/shared/ui/Portal/Portal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Overlay } from "@/shared/ui/Overlay/Overlay";
import { DeleteButton } from "@/features/delete";
import { DownloadButton } from "@/features/download";

interface ToolbarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Toolbar = memo(({isOpen, onClose: handleClose}: ToolbarProps) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>  
            <div className={classNames(cls.toolbar, mods, [])}>
                <Overlay onClick={handleClose} />
                <div className={cls.content}>
                    <DeleteButton />
                    <DownloadButton />
                </div>
            </div>
        </Portal>  
    );
});
