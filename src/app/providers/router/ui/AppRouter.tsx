import { Routes, Route } from "react-router-dom";
import { AppRoutesProps, routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};