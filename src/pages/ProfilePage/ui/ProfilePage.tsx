
import { ProfilePageHeader } from '@/widgets/ProfilePageHeader/ui/ProfilePageHeader';
import cls from './ProfilePage.module.scss';
import { UploadButton } from '@/features/upload';

export const ProfilePage = () => {
    return (
        <div className={cls.profilePage}>
            <ProfilePageHeader />
            <UploadButton />
            {/* <FilesList /> */}
        </div>
    );
};

