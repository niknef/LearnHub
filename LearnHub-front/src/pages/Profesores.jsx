import React,{ useEffect, useState } from 'react'
import ListadoProfesores from '../components/Profesores/ListadoProfesores'
import * as serviceProfesores from '../services/profesores.service'
const Profesores = () => {
    const [profesores, setProfesores] = useState([])

    useEffect( () => {
        serviceProfesores.getProfesores()
        .then( profesores => {
            setProfesores(profesores)
        })
    },[] )

    return (
        <ListadoProfesores listado={profesores} />
    )
}

export default Profesores