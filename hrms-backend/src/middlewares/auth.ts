import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { statusCodes } from "../utils/statusCodes.js";
import { errorResponseFunc } from "../utils/responseFunction.js";
import { constants } from "../utils/constants.js";
import Employees from "../model/employee.model.js";
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;


export const verifyToken = async(req: any, res: any, next: any) => {
    try{
        const token = req.headers["x-access-token"] || req.headers["authorization"];
        if (!token) {
            return res.status(statusCodes.unauthorized).send(
                errorResponseFunc(
                    {
                        message: "No token provided.",
                        error: "No token provided.",
                        code: statusCodes.unauthorized,
                        type: constants.UNAUTHORIZED
                    }     
                )
            );
        }
        else{
            jwt.verify(token, TOKEN_SECRET as string, async (err: any, decoded: any) => {
                if (err) {
                    return res.status(statusCodes.unauthorized).send(
                        errorResponseFunc(
                            {
                                message: "Invalid token.",
                                error: "Invalid token.",
                                code: statusCodes.unauthorized,
                                type: constants.UNAUTHORIZED
                            }
                        )
                    );
                }
                else {
                    req.loggerId = decoded.id;
                    req.roleId = decoded.roleId;
                    req.roleName = decoded.role;
                    req.name = decoded.name

                    const user = await Employees.findOne({
                        where: {
                            id: decoded.id,
                            isActive: true,
                        },
                    });

                    if(!user || user.sessionId !== decoded.sessionId){
                        return res.status(statusCodes.unauthorized).send(
                            errorResponseFunc(
                                {
                                    message: "Invalid token.",
                                    error: "Invalid token.",
                                    code: statusCodes.unauthorized,
                                    type: constants.UNAUTHORIZED
                                }
                            )
                        );
                    }else if(!decoded.roleId){
                        return res.status(statusCodes.unauthorized).send(
                            errorResponseFunc(
                                {
                                    message: "Role not assigned.",
                                    error: "Role not assigned.",
                                    code: statusCodes.unauthorized,
                                    type: constants.UNAUTHORIZED
                                }
                            )
                        );
                    }else{   
                        next();
                    }
                }
            })
        }
    }catch(err){
        return res.status(statusCodes.internalServerError).send(
            errorResponseFunc(
                {
                    message: "Internal server error.",
                    error: err,
                    code: statusCodes.internalServerError,
                    type: constants.ERROR
                }
            )
        );
    }
}
