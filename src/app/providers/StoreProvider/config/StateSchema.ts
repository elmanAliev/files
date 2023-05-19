import { LoginSchema } from "@/features/authByUsername";
import { RegisterSchema } from "@/features/registration";
import { AxiosInstance } from "axios";

export interface StateSchema {
    login: LoginSchema;
    register: RegisterSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}
export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}