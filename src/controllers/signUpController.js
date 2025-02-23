import prisma from '../prisma.js';
import bcrypt from 'bcrypt';

const signUpController = async (req, res) => {

    const { userName, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                userName: userName,
                password: hashedPassword,
                role: "USER" // lo voy a forzar a la roña
            }
        });

        res.status(201).json({message: "Usuario creado con éxito", user});
    } catch (error) {
        res.status(500).json({
            error: "Error al crear el usuario",
            details: error
        });
    }
    
}

export default signUpController;