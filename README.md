# Proyecto 16: Around the U.S. (Backend con Base de Datos)

Este proyecto corresponde al **Sprint 16** del curso de desarrollo web de **TripleTen**. Aquí se desarrolla una **API RESTful funcional** conectada a una base de datos **MongoDB**, utilizando **Express.js** y **Mongoose**.

El backend permite gestionar usuarios y tarjetas (lugares con imágenes), con validaciones, estructura modular, y manejo centralizado de errores.

## 🔧 Funcionalidades principales

### Usuarios (CRUD)

- `GET /users` – Obtener todos los usuarios
- `GET /users/:userId` – Obtener un usuario por ID
- `POST /users` – Crear un nuevo usuario
- `PATCH /users/me` – Actualizar nombre y descripción
- `PATCH /users/me/avatar` – Actualizar avatar

### Tarjetas (CRUD)

- `GET /cards` – Obtener todas las tarjetas
- `POST /cards` – Crear una nueva tarjeta
- `DELETE /cards/:cardId` – Eliminar una tarjeta por ID
- `PUT /cards/:cardId/likes` – Dar "me gusta"
- `DELETE /cards/:cardId/likes` – Quitar "me gusta"

## Características técnicas

- Validaciones de campos con **Mongoose**
- Middleware temporal para simular un usuario autenticado
- Middleware centralizado de manejo de errores (`errorHandler`)
- Conexión a base de datos local **MongoDB**
- Uso de **ESLint** con estilo `airbnb-base`
- Pruebas realizadas con **Postman**
- Estructura modular clara

## Estructura del proyecto

```
web_project_around_express/
├── controllers/
│   ├── cards.js
│   └── users.js
├── middlewares/
│   └── errorHandler.js
├── models/
│   ├── card.js
│   └── user.js
├── routes/
│   ├── cards.js
│   └── users.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── app.js
├── package.json
├── README.md
```

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- ESLint (`airbnb-base`)
- EditorConfig

## Cómo iniciar el servidor

1. Clona el repositorio

   ```bash
   git@github.com:CaroBedoya/web_project_around_express.git
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

3. Inicia el servidor
   ```bash
   npm run dev
   ```

El servidor estará disponible en:  
 [`http://localhost:3000`]
