
import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Date, ModalFooter, Button } from "reactstrap"


const modeloPermiso = {
    id : 0,
    nombreEmpleado : "",
    apellidoEmpleado : "",
    tipoPermiso : "",
    fechaPermiso : ""
}

const ModalPermission = ({ mostrarModal, setMostrarModal, guardarPermiso, editar, setEditar, editarPermiso }) => {

    const [permiso, setPermiso] = useState(modeloPermiso);

    const actualizarDato = (e) => {
        setPermiso(
            {
                ...permiso,
                [e.target.name] : e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (permiso.id == 0) {
            guardarPermiso(permiso);
        } else {
            editarPermiso(permiso);
        }

    }

    useEffect(() => {
        if (editar != null) {
            setPermiso(editar);
        } else {
            setPermiso(modeloPermiso);
        }
    },[editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {permiso.id == 0 ? "Nuevo Permiso" : "Editar Permiso"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombreEmpleado" onChange={(e) => actualizarDato(e)} value={permiso.nombreEmpleado}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido</Label>
                        <Input name="apellidoEmpleado" onChange={(e) => actualizarDato(e)} value={permiso.apellidoEmpleado}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tipo</Label>
                        <Input name="tipoPermiso" onChange={(e) => actualizarDato(e)} value={permiso.tipoPermiso}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Fecha (Ingresar en el siguiente formato: YYYY-MM-DD)</Label>
                        <Input name="fechaPermiso" onChange={(e) => actualizarDato(e)} value={permiso.fechaPermiso}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cancelar</Button>
            </ModalFooter>
        </Modal>
        )
}

export default ModalPermission;