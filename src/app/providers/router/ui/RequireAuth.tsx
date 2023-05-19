import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
   

    // const hasRequiredRoles = useMemo(() => {
    //     if (!roles) {
    //         return true;
    //     }

    //     return roles.some((requiredRole) => {
    //         const hasRole = userRoles?.includes(requiredRole);
    //         return hasRole;
    //     });
    // }, [roles, userRoles]);

    // if (!auth) {
    //     return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
    // }

    // if (!hasRequiredRoles) {
    //     return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    // }

    return children;
}
