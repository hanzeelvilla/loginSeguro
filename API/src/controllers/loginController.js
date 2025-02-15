import prisma from "../prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginController = async (req, res) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({error: "Usuario y contraseña son requeridos"});
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        });

        if (!user) {
            return res.status(401).json({error: "Credenciales incorrectas"});
        }

        if (!user.isActive) {
            return res.status(401).json({error: "Usuario inactivo, dile a Hanzeel que te active (son $50 baros papá 😎)"}); 
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({error: "Credenciales incorrectas"});
        }

        const token = jwt.sign(
            {id: user.id, role: user.role}, 
            process.env.JWT_SECRET, 
            {expiresIn: "1h"}
        );

        res.json({token});
    } catch (error) {
        res.status(500).json({
            error: "Error al iniciar sesión",
            details: error
        });
    }
}

export default loginController;