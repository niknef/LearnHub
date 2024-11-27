import express from "express";
import apiCursoRoute from "./api/routes/cursos.routes.js";
import apiProfesorRoute from "./api/routes/profesores.routes.js";
import apiUsuarioRoute from "./api/routes/usuarios.routes.js";
import apiTecnologiaRoute from "./api/routes/tecnologias.routes.js";
import apiCategoriaRoute from "./api/routes/categorias.routes.js";
import cors from "cors";
import http from "http";


const app = express();
const server = http.createServer(app);


// Middleware básicos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de CORS
const corsOptions = {
  origin: "http://localhost:5173", // Frontend permitido
  methods: "GET,POST,PUT,DELETE,PATCH", // Métodos permitidos
};
app.use(cors(corsOptions));

// Rutas API
app.use("/api", apiCursoRoute);
app.use("/api", apiProfesorRoute);
app.use("/api", apiUsuarioRoute);
app.use("/api", apiTecnologiaRoute);
app.use("/api", apiCategoriaRoute);



// Iniciar el servidor
server.listen(3333, () => console.log("Servidor funcionando en http://localhost:3333"));