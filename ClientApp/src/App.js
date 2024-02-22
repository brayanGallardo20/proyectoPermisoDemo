import React, { Component } from 'react';
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabla from "./componentes/Tabla"
import ModalPermission from "./componentes/ModalPermission"

import {Col, Container, Row, Card, CardHeader, CardBody, Button  } from "reactstrap"

const App = () => {

    const [permissions, setPermissions] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null); 

    const mostrarPermisos = async () => {

        const response = await fetch("api/permission/getPermissions");

        if (response.ok) {

            const data = await response.json();
            console.log(data);
            setPermissions(data);
        }
    }

    useEffect(() => {
        mostrarPermisos();
    }, []);


    const guardarPermiso = async (permiso) => {
        const response = await fetch("api/permission/SavePermission", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(permiso)
         })

        if (response.ok) {
            setMostrarModal(!mostrarModal)
            mostrarPermisos();
        }
    }

    const editarPermiso = async (permiso) => {
        const response = await fetch("api/permission/EditPermission", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(permiso)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal)
            mostrarPermisos();
        }
    }

    const eliminarPermiso = async (id) => {

        var respuesta = window.confirm("¿Desea eliminar el permiso?");

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/permission/DeletePermission/"+id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarPermisos();
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <h5>Lista de Permisos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)  } >Nuevo Permiso</Button>
                            <hr></hr>
                            <Tabla data={permissions}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarPermiso={eliminarPermiso}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalPermission
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarPermiso={guardarPermiso}

                editar={editar}
                setEditar={setEditar}
                editarPermiso={editarPermiso}
            />
        </Container>  
        )
}


export default App;