import cls from "./ProfilePageHeader.module.scss";
import { memo } from "react";
import { Text } from "@/shared/ui/Text/Text";
import { LogoutButton } from "@/features/logout";

export const ProfilePageHeader = memo(() => {
    return (
        <header className={cls.profilePageHeader}>
            <Text
                className={cls.appName}
                title={"Files"}
                size="size_l"
            />
            <LogoutButton />    
        </header>
    );
});
