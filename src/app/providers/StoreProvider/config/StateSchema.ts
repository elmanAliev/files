import { AxiosInstance } from "axios";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/login";
import { LogoutSchema } from "@/features/logout";
import { RegisterSchema } from "@/features/registration";

export interface StateSchema {
    user: UserSchema
    login: LoginSchema;
    register: RegisterSchema;
    logout: LogoutSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}
export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}