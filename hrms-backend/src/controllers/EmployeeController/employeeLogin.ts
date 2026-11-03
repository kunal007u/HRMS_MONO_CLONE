
import Employees from "../../model/employee.model.js";
import { constants } from "../../utils/constants.js";
import { errorResponseFunc, successResponseFunc } from "../../utils/responseFunction.js"
import { statusCodes } from "../../utils/statusCodes.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";

const TOKEN_MAXAGE = process.env.TOKEN_MAXAGE;
const TOKEN_SECRET = process.env.TOKEN_SECRET || '';

const getUserByEmail = async (email: string) => {
    return Employees.findOne({
        where: {
            email: email.toLowerCase(),
            isActive: constants.ACTIVE,
        },
    });
};

const generateToken = async (userData: any) => {
    const sessionId = uuid();
    await Employees.update({ sessionId }, { where: { id: userData.id } });
    return jwt.sign(
        {
            id: userData.id,
            // roleId: userData.roleId,
            // role: role.name,
            employeeId: userData.id,
            employee_code: userData.employee_code,
            name: `${userData.firstName} ${userData.lastName}`,
            sessionId: sessionId,
        },
        TOKEN_SECRET,
        { expiresIn: Number(TOKEN_MAXAGE) }
    );
};
const employeeLogin = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;

        // Validate the input
        if (!email || !password) {
            return res
                .status(statusCodes.badRequest)
                .send(
                    errorResponseFunc({
                        message: "Please fill all the fields.",
                        error: "Empty fields.",
                        code: statusCodes.badRequest,
                        type: constants.BADREQUEST
                    })
                );
        }

        const userData = await getUserByEmail(email);
        console.log("email", userData);
        
        if (!userData) {
            return res
                .status(statusCodes.notFound)
                .send(
                    errorResponseFunc({
                        message: "User not found.",
                        error: "Such user does not exist.",
                        code: statusCodes.notFound,
                        type: constants.NOTFOUND
                    })
                )
        }

        const passwordIsValid = bcrypt.compareSync(password, userData.password);
        if (!passwordIsValid) {
            return res
                .status(statusCodes.unauthorized)
                .send(
                    errorResponseFunc({
                        message: "The password is incorrect.",
                        error: "Incorrect password.",
                        code: statusCodes.unauthorized,
                        type: constants.UNAUTHORIZED
                    }
                    )
                );
        }

        const token = await generateToken(userData);
        res.setHeader("token", token);

        const fullName = `${userData.firstName} ${userData.lastName}`;

        return res
            .status(statusCodes.success)
            .send(
                successResponseFunc({
                    message: "Logged in successfully",
                    code: statusCodes.success,
                    type: constants.SUCCESS,
                    // data: { token, profilePicture: userData.profilePicture ? AWS_URL + "/" + userData.profilePicture : userData.profilePicture },
                    data: { token, profilePicture: userData.profilePicture },
                    name: fullName
                }
                )
            );
    }
    catch (err: any) {
        return res
            .status(statusCodes.internalServerError)
            .send(
                errorResponseFunc({
                    message: "Encountered some error.",
                    error: err.toString(),
                    code: statusCodes.internalServerError,
                    type: constants.ERROR
                })
            );
    }
}

export {
    employeeLogin,
    generateToken,
    getUserByEmail

}