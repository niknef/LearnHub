# LearnHub

**Plataforma de cursos** desarrollada con **Node.js**, **Express**, y **MongoDB** (API REST - CRUD).

## Descripción

LearnHub es una plataforma para la gestión de cursos en línea, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en cursos y usuarios. Esta API facilita el manejo de datos de cursos y clientes.

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución para JavaScript en el servidor.
- **Express** - Framework para crear servidores web y APIs.
- **MongoDB** - Base de datos NoSQL para almacenar cursos y clientes.
- **Nodemon** - Herramienta de desarrollo para recargar el servidor automáticamente.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/niknef/LearnHub-API.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd LearnHub-API
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm init -y
    npm install express mongodb@6.9
    npm install nodemon -D
    ```


## Ejecución del Proyecto

1. Para iniciar el servidor, ejecuta:

    ```bash
    npm run dev
    ```

2. El servidor estará corriendo en `http://localhost:3333`.

## Ejemplos de JSON para la API

### Cursos

```json
{
    "nombre": "JavaScript Avanzado",
    "categoria": "frontend",
    "descripcion": "Profundiza en JavaScript para crear aplicaciones interactivas y manejar eventos del DOM.",
    "tecnologias": ["JavaScript", "ES6+", "APIs", "DOM"],
    "horas": 30,
    "img": "frontend.jpg",
    "profesorId": "672cc910086e02ec61d98892",
    "link": "https://github.com/niknef"
}

{
    "nombre": "Test de carga de curso",
    "categoria": "frontend",
    "descripcion": "Test de carga de curso desde el profesor juan",
    "tecnologias": ["JavaScript", "ES6+", "APIs", "DOM"],
    "horas": 30,
    "img": "frontend.jpg",
    "profesorId": "67464ad2b714abfb982becc2",
    "link": "https://github.com/niknef"
}
```

### Clientes

```json
{
  "nombre": "Nicolas",
  "foto": "user.png",
  "descripcion": "Soy el primer usuario de esta API"
}
```

### usuario

```json
{
    "nombre": "nicolas",
    "apellido": "firpo",
    "email": "nicolas.firpo@davinci.edu.ar",
    "password":"Test1234@",
    "passwordConfirm":"Test1234@",
    "age":"24",
    "role":"profesor"
}

{
    "nombre": "abigail",
    "apellido": "gonzalez",
    "email": "abigailofe2@gmail.com",
    "password":"Test1234@",
    "passwordConfirm":"Test1234@",
    "age":"25",
    "role":"alumno"
}

{
    "nombre": "jorge",
    "apellido": "firpo",
    "email": "jorgefirpo@gmail.com",
    "password":"Test1234@",
    "passwordConfirm":"Test1234@",
    "age":"25",
    "role":"alumno"
}

{
    "email": "jorgefirpo@gmail.com",
    "password":"Test1234@"

}
```

### Profesor
```json
{
    "userId": "672cc68118fee94a8fb054cb",
    "foto": "perfilnico.jpg",
    "bio": "Hola a todos! Soy Nicolás firpo, profesor de LearnHub, me encanta el mundo del desarrollo web y me encanta compartir mis conocimientos con todos ustedes!"
}

{
    "userId": "67464a4bb714abfb982becc0",
    "foto": "perfilnico.jpg",
    "bio": "Hola a todos! Soy Juan, profesor de LearnHub, me encanta el mundo del desarrollo web y me encanta compartir mis conocimientos con todos ustedes!"
}

```