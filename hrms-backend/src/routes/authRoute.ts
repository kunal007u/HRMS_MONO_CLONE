import {Router} from "express";
import { employeeLogin } from "../controllers/EmployeeController/employeeLogin.js";
import { verifyToken } from "../middlewares/auth.js";
import { readPermission } from "../controllers/AdminController/readPermission.js";

const router = Router();


router.get("/readPermission", [verifyToken], readPermission);
router.post("/employeeLogin", employeeLogin);

export default router;