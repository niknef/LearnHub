import React from 'react';


const CategoriasTable = ({ data, onEdit, onDelete }) => {
    return (
        <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-dark text-center">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((categoria) => (
                            <tr key={categoria._id}>
                                <td className="fw-bold">{categoria.nombre}</td>
                                <td className="text-muted">{categoria.descripcion}</td>
                                <td>
                                    <div className="d-flex justify-content-center gap-2">
                                        <button 
                                            className="btn btn-warning btn-sm" 
                                            onClick={() => onEdit(categoria)}
                                        >
                                            <i className="bi bi-pencil-fill"></i> Editar
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => onDelete(categoria._id)}
                                        >
                                            <i className="bi bi-trash-fill"></i> Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default CategoriasTable;
