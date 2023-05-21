import cls from './RegistrationForm.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { Loader } from '@/shared/ui/Loader/Loader';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { useRegistrationForm } from './useRegistrationForm';


export const RegistrationForm = () => {
    const {
        values,
        errors,
        touched,
        error,
        isLoading,
        handleChange,
        handleSubmit,
    } = useRegistrationForm();

    if (isLoading) {
        return (
            <div className={cls.registerForm}>
                <Loader />
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={cls.registerForm}>
            <Text 
                className={cls.title} 
                title="Регистрация" 
                align="center"
            />
            <Input
                className={cls.input}
                type="text"
                placeholder="Введите имя"
                onChange={handleChange}
                value={values.name}
                hasError={!!(errors.name && touched.name)}
                touched={touched.name}
                errorText={errors.name}
                name="name"
                id="name"
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
                Зарегистрироваться
            </Button>
            <div className={cls.link}>
                Уже зарегестрированы? <AppLink to={"/"}>Перейти к авторизации</AppLink>
            </div>
        </form>
    );
};
