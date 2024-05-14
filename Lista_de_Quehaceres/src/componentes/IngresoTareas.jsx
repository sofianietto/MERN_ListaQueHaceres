import React, { useState } from 'react'

const IngresoTareas = (props) => {

    const { tareas, setTareas } = props;
    console.log("Desde ingreso: " + tareas)

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoTar = [...tareas, {
            id: Math.random().toString(36).substr(2, 18),
            tarea: e.target.tarea.value,
            done: false
        }];
        setTareas(nuevoTar);
        e.target.tarea.value = "";
        localStorage.setItem('tareas', JSON.stringify(nuevoTar));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' className="form-control" name='tarea' placeholder='Agregar tareas' />
            <input type="submit" className="btn btn-primary mt-3" value='Agregar' />
        </form>
    )
}

export default IngresoTareas