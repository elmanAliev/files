import cls from './LoginForm.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginEmail, getLoginError, getLoginIsLoading, getLoginPassword } from '../../model/selectors/getLoginData';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Loader } from '@/shared/ui/Loader/Loader';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export const LoginForm = () => {
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const disabled = !email || !password;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChangeEmail = (value: string) => {
        dispatch(loginActions.setEmail(value));
    }

    const handleChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    }

    const handleRegister = async () => {
        const result = await dispatch(loginByUsername({email, password}));
        if (result.meta.requestStatus === "fulfilled") {
            navigate(RoutePath.profile);
        }
    }

    if (isLoading) {
        return (
            <div className={cls.loginForm}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={cls.loginForm}>
            <Text 
                className={cls.title} 
                title="Авторизация" 
                align="center"
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
                type="password"
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
                Авторизоваться
            </Button>
            <div className={cls.link}>
                Еще не зарегестрированы? <AppLink to={"/register"}>Перейти к регистрации</AppLink>
            </div>
        </div>
    );
};
