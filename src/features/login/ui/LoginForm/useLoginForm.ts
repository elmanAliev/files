import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./config";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { getLoginError, getLoginIsLoading } from "../../model/selectors/getLoginData";

interface HandleLoginProps {
    email: string;
    password: string;
}

export const useLoginForm = () => {
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // авторизация
    const handleLogin = async (data: HandleLoginProps) => {
        const result = await dispatch(loginByUsername(data));

        // если авторизация прошла успешно - переход на страницу профиля
        if (result.meta.requestStatus === "fulfilled") {
            navigate(RoutePath.profile);
        }
    }

    // используется библиотека formik для валидации полей ввода
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleLogin,
    });
    
    const { values, errors, touched, handleChange, handleSubmit } = formik;

    return {
        error,
        values,
        errors,
        touched,
        isLoading,
        handleChange,
        handleSubmit,
    };
};
