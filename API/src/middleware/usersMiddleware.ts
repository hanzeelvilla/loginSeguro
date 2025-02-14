import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const userSchema = z.object({
    userName: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres").max(20),
    password: z.string().min(8, "La contraseña debe ser de al mens 8 caracteres").max(20),
});

export const usersMiddleware = {
    validateSignUp: (req: Request, res: Response, next: NextFunction) => {
        const result = userSchema.safeParse(req.body);

        if (!result.success) {
            res.status(400).json({
                error: "Datos inválidos",
                details: result.error.format()
            });
            return;
        }

        next();
    }
};