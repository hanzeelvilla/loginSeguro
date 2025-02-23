import { z } from 'zod';
import prisma from '../prisma.js';

const userSchema = z.object({
    userName: z.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(20, "El nombre de usuario debe tener como máximo 20 caracteres"),
    password: z.string()
    .min(8, "La contraseña debe ser de al mens 8 caracteres")
    .max(20, "La contraseña debe ser de como máximo 20 caracteres"),
});

export const usersMiddleware = {
    validateSignUp: async (req, res, next) => {

        const { userName, password, repeatedPassword } = req.body;

        if (!userName || !password || !repeatedPassword) {
            res.status(400).json({
                error: "El nombre de usuario y la contraseña son requeridos"
            });
            return;
        }

        if (password !== repeatedPassword) {
            res.status(400).json({
                error: "Las contraseñas deben ser iguales"
            });
            return;
        }

        const result = userSchema.safeParse(req.body);

        if (!result.success) {
            res.status(400).json({
                error: "Datos inválidos",
                details: result.error.format()
            });
            return;
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                userName
            }
        });

        if (existingUser) {
            res.status(400).json({
                error: "El nombre de usuario ya está en uso"
            });
            return;
        }

        next();
    },

    
};