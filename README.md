# LearnHub

**Plataforma de cursos** desarrollada con **Node.js**, **Express**, y **MongoDB** (API REST - CRUD).

## Descripción

LearnHub es una plataforma para la gestión de cursos en línea, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en cursos y usuarios. Esta API facilita el manejo de datos de cursos y clientes.

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución para JavaScript en el servidor.
- **Express** - Framework para crear servidores web y APIs.
- **MongoDB** - Base de datos NoSQL para almacenar cursos y clientes.
- **TailwindCSS** - Framework de CSS para el diseño visual.
- **Nodemon** - Herramienta de desarrollo para recargar el servidor automáticamente.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/niknef/LearnHub.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd LearnHub
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm init -y
    npm install express mongodb@6.9
    npm install nodemon -D
    npm install -D tailwindcss
    ```

4. Inicializa TailwindCSS:

    ```bash
    npx tailwindcss init
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
  "tecnologias": [
    "JavaScript",
    "ES6+",
    "APIs",
    "DOM"
  ],
  "horas": 30,
  "img": "frontend.jpg",
  "link": "https://github.com/niknef/LearnHub"
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

