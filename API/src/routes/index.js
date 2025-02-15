import { Router } from "express";
import signUp from "./signUp.js";

const router = Router();

router.use("/sign-up", signUp);

export default router;