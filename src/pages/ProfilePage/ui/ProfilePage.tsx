
import cls from './ProfilePage.module.scss';
import { UploadButton } from '@/features/upload';
import { FileList } from '@/entities/File';
import { ProfilePageHeader } from '@/widgets/ProfilePageHeader';

export const ProfilePage = () => {
    return (
        <div className={cls.profilePage}>
            <ProfilePageHeader />
            <UploadButton />
            <FileList />
        </div>
    );
};

