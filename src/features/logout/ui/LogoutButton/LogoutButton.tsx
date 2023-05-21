import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { Button } from '@/shared/ui/Button/Button';
import { logoutUser } from "../../model/services/logoutUser/logoutUser";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";


export const LogoutButton = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    // разавторизация
    const handleLogout = async () => {
        const result = await dispatch(logoutUser());

        // если разавторизация прошла успешно - переход на страницу авторизации
        if (result.meta.requestStatus === "fulfilled") {
            navigate(RoutePath.login);
        }
    };

    return (
        <Button 
            onClick={handleLogout}
            theme="clear"
        >    
                Выйти
        </Button>
    );
};
