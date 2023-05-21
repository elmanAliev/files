import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z0-9@#._-]+$/, {
            message: "Недопустимые символы",
        })
        .required("Заполните поле"),
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
