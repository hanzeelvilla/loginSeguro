# LOGIN SEGURO
Un login simple con diferentes roles y permisos.

## Requisitos
Tener instalado:
- Node.js
- Mysql

## Configuración API

1. Clonar el repositorio.
```bash
git clone https://github.com/hanzeelvilla/loginSeguro.git
```

2. Instalar las dependencias.
```bash
npm i
```

3. Crear un archivo `.env` en la raíz del directorio. Con la conexion a MySQL y una frase secreta para los tokens. Cambia los campos con tus credenciales. correspondientes.
```bash
DATABASE_URL="mysql://user:pswd@localhost:3306/bd_name"
JWT_SECRET="your_secret_phrase"
```

> [!NOTE]
> El puerto default de mysql es 3306.

4. Crear la migración de la BD.
```bash
npx prisma migrate dev --name init
```

5. Iniciar La Api.
```bash
npm run start
```

> [!NOTE]
> El servidor inicia en el puerto 3000. A menos que especifique uno diferente en las variables del entorno.

6. Crear un usuario tipo ADMIN.
```bash
npm run createAdmin nombreDeUsuario ContraseñaUsuario
```

## ENDPOINTS
- POST  `/api/login`: Iniciar sesión.
- POST  `/api/sign-up`: Crear una cuenta de usuario tipo **USER**.
- GET   `/api/users`: Lista de todos los usuarios.
- PATCH `api/users/id`: Actualizar información de un usuario **(ACTIVO ó INACTIVO).**

## Probar los endpoints
Es posible crear comandos CURL para probar los endpoints disponibles, 
para hacer más simple esta tarea el repo tiene un archivo llamado `testEndpoints.rest`,
solo es necesario tener instalada la extensión `REST CLIENT` de VS CODE.