import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    onClick?: () => void;
}

export const Overlay = memo(({onClick}: OverlayProps) => {
    return (
        <div onClick={onClick} className={cls.overlay} />
    );
});
