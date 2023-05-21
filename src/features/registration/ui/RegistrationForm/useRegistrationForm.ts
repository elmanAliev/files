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

    const handleLogin = async ({ name, email, password }: HandleRegistrProps) => {
        const result = await dispatch(register({name, email, password}));
        if (result.meta.requestStatus === "fulfilled") {
            navigate(RoutePath.login);
        }
    }

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
