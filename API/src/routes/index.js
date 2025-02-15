import { Router } from "express";
import signUp from "./signUp.js";
import login from "./login.js";

const router = Router();

router.use("/sign-up", signUp);
router.use("/login", login);

export default router;