import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routre/routeConfig';
import { getUserRole, UserRole } from 'entity/User';

interface RequireRolesProps {
    children: JSX.Element;
    roles: UserRole[];
}
export function RequireRoles({ children, roles }: RequireRolesProps) {
    const location = useLocation();
    const userRoles = useSelector(getUserRole);
    const hasAccess = roles.some((role) => {
        const hasRole = userRoles?.includes(role);
        return hasRole;
    });

    if (!hasAccess) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
