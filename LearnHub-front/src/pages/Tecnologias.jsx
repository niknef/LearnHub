import React,{ useEffect, useState } from 'react'
import ListadoTecnologias from '../components/Tecnologias/ListadoTecnologias'
import * as serviceTecnologias from '../services/tecnologias.service'
const Tecnologias = () => {
    const [tecnologias, setTecnologias] = useState([])

    useEffect( () => {
        serviceTecnologias.getTecnologias()
        .then( tecnologias => {
            setTecnologias(tecnologias)
        })
    },[] )

    return (
        <ListadoTecnologias listado={tecnologias} />
    )
}

export default Tecnologias