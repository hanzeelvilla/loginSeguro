import { Router } from "express";
import signUp from "./signUp.js";
import login from "./login.js";
import users from "./users.js";

const router = Router();

router.use("/sign-up", signUp);
router.use("/login", login);
router.use("/users", users);

export default router;