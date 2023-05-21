import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { getUserInited, userActions } from "@/entities/User";
import { AppRouter } from "./providers/router";
import { Toast } from "@/shared/ui/Toast/Toast";

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    // проверяем, авторизован ли пользователь
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={"app"}>
            {inited && <AppRouter />}
            <Toast />
        </div>
    );
}

export default App;
