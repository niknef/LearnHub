const UsuariosTable = ({ data, onPromoteToProfesor, onAddProfesor }) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark text-center">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((usuario) => (
                        <tr key={usuario._id}>
                            <td className="fw-bold">{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.role}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    {usuario.role !== "profesor" && (
                                        <button
                                            className="btn boton-custom btn-sm action-btn"
                                            onClick={() => onPromoteToProfesor(usuario._id)}
                                        >
                                            <i className="bi bi-person-check"></i> Promover
                                        </button>
                                    )}
                                    {usuario.role === "profesor" && (
                                        <button
                                            className="btn boton-custom-2 btn-sm action-btn"
                                            onClick={() => onAddProfesor(usuario._id)}
                                        >
                                            <i className="bi bi-person-plus"></i> Agregar
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsuariosTable;
