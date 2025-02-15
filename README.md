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

3. Crear un archivo `.env` en la raíz del directorio.
```BASH
DATABASE_URL="mysql://user:pswd@localhost:3306/bd_name"
```
> [!NOTE]
> El puerto default de mysql es `3306`.

4. Crear la migración de la BD.
```bash
npx prisma migrate dev --name init
```

5. Iniciar el servidor.
```bash
npm run dev
```

6. Crear un usuario tipo ADMIN
```bash
npm run createAdmin nombreDeUsuario ContraseñaUsuario
```