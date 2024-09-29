import express from "express"
import cursoRoute from "./routes/cursos.routes.js"
import clienteRoute from "./routes/clientes.routes.js"
import apiCursoRoute from "./api/routes/cursos.routes.js"
import apiClienteRoute from "./api/routes/clientes.routes.js"

const app = express()

app.use( express.static("public") )
app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )

app.use("/api",apiCursoRoute)
app.use("/api",apiClienteRoute)
app.use(cursoRoute)
app.use(clienteRoute)

app.listen(3333, () => console.log("Servidor funcionando"))