import prisma from "../prisma.js";

export const usersController =  {
    list: async (req, res) => {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({
                error: "Error al obtener los usuarios",
                details: error
            });
        }
    },
};