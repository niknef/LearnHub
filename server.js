import express from "express"
import cursoRoute from "./routes/cursos.routes.js"

const app = express()

app.use( express.static("public") )
app.use( express.urlencoded({ extended: true }) )

app.use(cursoRoute)

app.listen(3333, () => console.log("Servidor funcionando"))