import * as cursoService from "../services/cursos.service.js"
import * as cursoView from "../views/cursos.view.js"

const getHome = (req, res) => {
    res.send(cursoView.crearPagina("Home", cursoView.crearHome()))
};
export {
    getHome,
    // getPeliculaId,
    // getPeliculas,
    // nuevaPelicula,
    // agregarPelicula,
    // eliminarPelicula,
    // getPeliculasBorradas, 
    // restaurarPelicula
}