import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./config";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { register } from "../../model/services/register/register";
import { getRegisterError, getRegisterIsLoading } from "../../model/selectors/getRegisterData";

interface HandleRegistrProps {
    name: string;
    email: string;
    password: string;
}

export const useRegistrationForm = () => {
    const isLoading = useSelector(getRegisterIsLoading);
    const error = useSelector(getRegisterError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // регистрация
    const handleRegister = async (data: HandleRegistrProps) => {
        const result = await dispatch(register(data));
        
        // если регистрация прошла успешно - переход на страницу авторизации
        if (result.meta.requestStatus === "fulfilled") {
            navigate(RoutePath.login);
        }
    }

    // используется библиотека formik для валидации полей ввода
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleRegister,
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
