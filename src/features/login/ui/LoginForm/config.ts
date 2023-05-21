import * as Yup from "yup";

const initialValues = {
    email: "",
    password: "",
};

// схема валидации полей ввода в форме авторизации
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Введите действительный адрес электронной почты")
        .required("Заполните поле"),
    password: Yup.string()
        .matches(/^[a-zA-Z0-9@#,$;!._-]+$/, {
            message: "Недопустимые символы",
        })
        .required("Заполните поле"),
});

export { initialValues, validationSchema };
