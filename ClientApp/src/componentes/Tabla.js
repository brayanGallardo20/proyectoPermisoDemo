
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap"

const Tabla = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarPermiso }) => {

    const enviarDatos = (permiso) => {
        setEditar(permiso);
        setMostrarModal(!mostrarModal);
    }

    return (
        <Table striped responsive>
            <thead>
                <th>Id</th>
                <th>Nombre Empleado</th>
                <th>Apellido Empleado</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="5">No se encontraron registros</td>
                        </tr>
                        ):(

                    data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nombreEmpleado}</td>
                            <td>{item.apellidoEmpleado}</td>
                            <td>{item.tipoPermiso}</td>
                            <td>{item.fechaPermiso}</td>
                            <td>
                                <Button color="primary" onClick={() => enviarDatos(item)} size="sm" className="me-2">Editar</Button>
                                <Button color="danger" onClick={() => eliminarPermiso(item.id)} size="sm">Eliminar</Button>
                            </td>
                        </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
        )

}

export default Tabla;