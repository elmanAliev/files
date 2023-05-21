import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Loader } from '@/shared/ui/Loader/Loader';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useLoginForm } from './useLoginForm';

export const LoginForm = () => {
    const {
        values,
        errors,
        touched,
        error,
        isLoading,
        handleChange,
        handleSubmit,
    } = useLoginForm();

    if (isLoading) {
        return (
            <div className={cls.loginForm}>
                <Loader />
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={cls.loginForm}>
            <Text 
                className={cls.title} 
                title="Авторизация" 
                align="center"
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={"Введите почту"}
                onChange={handleChange}
                value={values.email}
                hasError={!!(errors.email && touched.email)}
                touched={touched.email}
                errorText={errors.email}
                name="email"
                id="email"
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={"Введите пароль"}
                onChange={handleChange}
                value={values.password}
                hasError={!!(errors.password && touched.password)}
                touched={touched.password}
                errorText={errors.password}
                name="password"
                id="password"
            />
            {error && (
                <Text
                    className={cls.error}
                    text={error} 
                    theme="error"
                />
            )}
            <Button
                type="submit"
                className={cls.loginBtn}
            >
                    Авторизоваться
            </Button>
            <div className={cls.link}>
                Еще не зарегестрированы? <AppLink to={RoutePath.register}>Перейти к регистрации</AppLink>
            </div>
        </form>
    );
};
