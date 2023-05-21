import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { getUserInited, userActions } from "@/entities/User";
import { AppRouter } from "./providers/router";
import { useSelector } from "react-redux";
import { Toast } from "@/shared/ui/Toast/Toast";

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

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
