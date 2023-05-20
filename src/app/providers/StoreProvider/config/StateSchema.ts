import { AxiosInstance } from "axios";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/login";
import { LogoutSchema } from "@/features/logout";
import { RegisterSchema } from "@/features/registration";
import { UploadSchema } from "@/features/upload";
import { FileSchema } from "@/entities/File";
import { DeleteSchema } from "@/features/delete";
import { DownloadSchema } from "@/features/download";

export interface StateSchema {
    user: UserSchema
    login: LoginSchema;
    register: RegisterSchema;
    logout: LogoutSchema;
    upload: UploadSchema;
    file: FileSchema;
    delete: DeleteSchema;
    download: DownloadSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}
export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}