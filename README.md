# LOGIN SEGURO
Un login simple con diferentes roles y permisos.

## Requisitos
- Node.js
- Mysql

## Configuración API

1. Clonar el repositorio
```bash
git clone https://github.com/hanzeelvilla/loginSeguro.git
```

2. Entrar al directorio.
```bash
cd API/
```

3. Instalar las dependencias.
```bash
npm i
```

4. Crear un archivo `.env` en la raíz del directorio. Con la conexion a MySQL y una frase secreta para los tokens.
```BASH
DATABASE_URL="mysql://user:pswd@localhost:3306/bd_name"
JWT_SECRET="your_secret_phrase"
```
> [!NOTE]
> El puerto default de mysql es `3306`.

5. Crear la migración de la BD.
```bash
npx prisma migrate dev --name init
```

6. Iniciar La Api.
```bash
npm run start
```

> [!NOTE]
> El servidor inicia en el puerto `3000`. A menos que especifique uno diferente en las variables del entorno.

7. Crear un usuario tipo ADMIN
```bash
npm run createAdmin nombreDeUsuario ContraseñaUsuario
```

8. Iniciar la web App desde el `login.html` con live server
