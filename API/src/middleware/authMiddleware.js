import jwt from 'jsonwebtoken';

const authMiddleware = {
    authenticateUser: (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json({
                error: "No se ha enviado un token"
            });
            return;
        }

        jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (error, user) => {
            if (error) {
                res.status(401).json({
                    error: "Token inválido"
                });
                return;
            }

            req.user = user;
            next();
        });
    },

    isAdmin: (req, res, next) => {
        if (req.user.role !== 'ADMIN') {
            res.status(403).json({
                error: "No tienes permisos para realizar esta acción"
            });
            return;
        }

        next();
    }
}

export default authMiddleware;