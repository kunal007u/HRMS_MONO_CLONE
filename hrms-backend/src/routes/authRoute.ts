import {Router} from "express";
import { employeeLogin } from "../controllers/EmployeeController/employeeLogin.js";

const router = Router();


router.post("/employeeLogin", employeeLogin);

export default router;