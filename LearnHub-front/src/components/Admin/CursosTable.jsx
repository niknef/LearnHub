import { useNavigate } from 'react-router-dom';

const CursosTable = ({ data, onEdit }) => {
    const navigate = useNavigate();

    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
                <thead className="table-dark text-center">
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Tecnologías</th>
                        <th scope="col">Horas</th>
                        <th scope="col">Profesor</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((curso) => (
                        <tr key={curso._id}>
                            <td>
                                <img 
                                    src={`/img/${curso.img}`} 
                                    alt={curso.nombre} 
                                    className="img-thumbnail"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                                />
                            </td>
                            <td className="fw-bold">{curso.nombre}</td>
                            <td>{capitalize(curso.categoria)}</td>
                            <td>
                                {curso.tecnologias.map((tec, index) => (
                                    <span key={index} className="badge bg-secondary me-1">
                                        {tec}
                                    </span>
                                ))}
                            </td>
                            <td>{curso.horas}</td>
                            <td>{capitalize(curso.profesor.user.nombre)}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <button 
                                        className="btn btn-warning btn-sm" 
                                        onClick={() => onEdit(curso)}
                                    >
                                        <i className="bi bi-pencil-fill"></i> Editar
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => navigate(`/admin/cursos/eliminar/${curso._id}`)}
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

export default CursosTable;
