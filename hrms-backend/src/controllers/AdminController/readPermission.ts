import Permissions from "../../model/permission.model.js";
import Route from "../../model/route.model.js";
import { constants } from "../../utils/constants.js";
import { errorResponseFunc } from "../../utils/responseFunction.js";
import { statusCodes } from "../../utils/statusCodes.js";

interface MenuRoute {
    id: string;
    name: string;
    priority: number;
    parentRouteId: string | null;
    path: string | null;
}

export const readPermission = async (req: any, res: any) => {
    const id = req.roleId;

    if (!id) {
        return res.status(statusCodes.unauthorized).send(
            errorResponseFunc({
                message: "Unauthorized access",
                error: "Role ID is missing in the request",
                code: statusCodes.unauthorized,
                type: "error",

            }
            )
        );
    } else {
        const permission = await Permissions.findAll({
            where: { roleId: id, canRead: true },
            attributes: ['canRead'],
            include: [{
                model: Route,
                where: { isActive: constants.ACTIVE },
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }]
        })


        const buildTree = (routes: MenuRoute[],parentId: string | null = null): object[] => {
            return routes
                .filter((route) => route.parentRouteId === parentId)
                .sort((a, b) => a.priority - b.priority)
                .map((route) => ({
                    id: route.id,
                    name: route.name,
                    priority: route.priority,
                    childRoute: buildTree(routes, route.id),
                    path: route.path,
                }));
        };

        const menuTree = buildTree(permission.map((perm: any) => perm.route as MenuRoute));

        return res.status(statusCodes.success).send({
            message: "Permission fetched successfully",
            data: menuTree,
            code: statusCodes.success,
            type: "success",
        });
    }
}