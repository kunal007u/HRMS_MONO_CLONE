import Permissions from "../../model/permission.model.js";
import Route from "../../model/route.model.js";
import { constants } from "../../utils/constants.js";
import { errorResponseFunc } from "../../utils/responseFunction.js";
import { statusCodes } from "../../utils/statusCodes.js";

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
    }else{
        const permission = await Permissions.findAll({
            where:{roleId:id, canRead: true},
            attributes: ['canRead'],
            include: [{
                model: Route,
                where: { isActive: constants.ACTIVE },
                attributes:{ exclude: ['createdAt', 'updatedAt']}
            }]
        })

        return res.status(200).json({
            data: permission,
        });
    }
}