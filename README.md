# LOGIN SEGURO

## Configuración API

1. Entrar al directorio.
```bash
cd API/
```

2. Instalar las dependencias.
```bash
npm i
```

1. Crear un archivo `.env` en la raíz del directorio. Con la conexion a MySQL y una frase secreta para los tokens.
```BASH
DATABASE_URL="mysql://user:pswd@localhost:3306/bd_name"
JWT_SECRET="your_secret_phrase"
```
> [!NOTE]
> El puerto default de mysql es `3306`.

1. Crear la migración de la BD.
```bash
npx prisma migrate dev --name init
```

1. Iniciar el servidor.
```bash
npm run dev
```

1. Crear un usuario tipo ADMIN
```bash
npm run createAdmin nombreDeUsuario ContraseñaUsuario
```