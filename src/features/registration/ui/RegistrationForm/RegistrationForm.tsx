import cls from './RegistrationForm.module.scss';
import { useCallback } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { getRegisterEmail, getRegisterError, getRegisterIsLoading, getRegisterName, getRegisterPassword } from '../../model/selectors/getRegisterData';
import { registerActions } from "../../model/slice/registerSlice";
import { register } from "../../model/services/register/register";
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { Loader } from '@/shared/ui/Loader/Loader';
import { AppLink } from '@/shared/ui/AppLink/AppLink';


export const RegistrationForm = () => {
    const name = useSelector(getRegisterName);
    const email = useSelector(getRegisterEmail);
    const password = useSelector(getRegisterPassword);
    const isLoading = useSelector(getRegisterIsLoading);
    const error = useSelector(getRegisterError);
    const disabled = !name || !email || !password;
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleChangeName = useCallback((value: string) => {
        dispatch(registerActions.setName(value));
    }, [dispatch]);

    const handleChangeEmail = useCallback((value: string) => {
        dispatch(registerActions.setEmail(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(registerActions.setPassword(value));
    }, [dispatch]);


    const handleRegister = async () => {
        const result = await dispatch(register({name, email, password}))
        if (result.meta.requestStatus === "fulfilled") {
            navigate("/");
        }
    };

    if (isLoading) {
        return (
            <div className={cls.registerForm}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={cls.registerForm}>
            <Text 
                className={cls.title} 
                title="Регистрация" 
                align="center"
            />
            <Input
                className={cls.input}
                type="text"
                placeholder="Введите логин"
                onChange={handleChangeName}
                value={name}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={"Введите почту"}
                onChange={handleChangeEmail}
                value={email}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={"Введите пароль"}
                onChange={handleChangePassword}
                value={password}
            />
            {error && (
                <Text
                    className={cls.error}
                    text={error} 
                    theme="error"
                />
            )}
            <Button
                onClick={handleRegister}
                className={cls.loginBtn}
                disabled={disabled}
            >
                Зарегистрироваться
            </Button>
            <div className={cls.link}>
                Уже зарегестрированы? <AppLink to={"/"}>Перейти к авторизации</AppLink>
            </div>
        </div>
    );
};
