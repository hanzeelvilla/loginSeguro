import { Router } from "express";
import { usersController } from "../controllers/usersController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware.authenticateUser, authMiddleware.isAdmin, (req, res, next) => {
    usersController.list(req, res, next);
});

router.patch("/:id", authMiddleware.authenticateUser, authMiddleware.isAdmin, (req, res, next) => {
    usersController.update(req, res, next);
});

export default router;