import prisma from "../prisma.js";

export const usersController =  {
    list: async (req, res, next) => {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener los usuarios",
                details: error
            });
        }

        next();
    },

    update: async (req, res, next) => {
        const { id } = req.params;
        const { isActive } = req.body;

        try {
            const user = await prisma.user.update({
                where: {
                    id: id
                },
                data: {
                    isActive
                }
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({
                error: "Error al actualizar el usuario",
                details: error
            });
        }

        next();
    }
};