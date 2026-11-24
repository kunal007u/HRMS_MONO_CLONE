import { camelCase } from "lodash";
import type { IPermissionRoute } from "../Model/permission/permissionM";

export const camelizeKeys = (obj: any) => {
    if (Array.isArray(obj)) {
        return obj.map((v: any) => camelizeKeys(v));
    } else if (obj != null && obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (result, key) => ({
                ...result,
                [camelCase(key)]: camelizeKeys(obj[key]),
            }),
            {},
        );
    }
    return obj;
};


export const getFirstPermittedPath = (routes: IPermissionRoute[]): string | null => {
    for (const route of routes) {
        console.log("Route:", route); // Debugging line to check the structure of each route
        if (route.path) {
            return route.path;
        }

        const childPath = getFirstPermittedPath(route.childRoute);

        if (childPath) {
            return childPath;
        }
    }

    return null;
};

export const hasActiveRoute = (
    route: IPermissionRoute,
    pathname: string
): boolean => {
    return (
        route.path === pathname ||
        route.childRoute.some((child) =>
            hasActiveRoute(child, pathname)
        )
    );
};