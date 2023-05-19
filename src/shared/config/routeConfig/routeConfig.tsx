import { RouteProps } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  LOGIN = "login",
  REGISTER = "register",
  PROFILE = "profile",
  FORBIDDEN = "forbidden",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: "/",
    [AppRoutes.REGISTER]: "/register",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <RegisterPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
