import React,{ useEffect, useState } from 'react'
import ListadoCategorias from '../components/Categorias/ListadoCategorias'
import * as serviceCategorias from '../services/categorias.service'
const Categorias = () => {
    const [categorias, setCategorias] = useState([])

    useEffect( () => {
        serviceCategorias.getCategorias()
        .then( categorias => {
            setCategorias(categorias)
        })
    },[] )

    return (
        <ListadoCategorias listado={categorias} />
    )
}

export default Categorias