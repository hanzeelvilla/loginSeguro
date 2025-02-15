import prisma from "../prisma.js";
import bcrypt from "bcrypt";

const [, , userName, password] = process.argv

if (!userName || !password) {
    console.error("Agrega un nombre de usuario y contraseña");
    process.exit(1);
}

const signUpAdmin = async (userName, password) => {

    try {
        const user = await prisma.user.create({
            data: {
                userName,
                password: bcrypt.hashSync(password, 10),
                role: "ADMIN"
            }
        });

        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

signUpAdmin(userName, password);