import React, { useState } from 'react'


const ListaTareas = (props) => {

    const { tareas, setTareas } = props;
    console.log(tareas);

    const handleCheck = (tarea) => {
        const nuevoTar = tareas.map((tar) => {
            if (tar.id === tarea.id) {
                return { ...tar, done: !tar.done }
            }
            return tar;
        })
        setTareas(nuevoTar);
        localStorage.setItem('tareas', JSON.stringify(nuevoTar));
    }

    const handleDelete = (tarea) => {
        const nuevoTar = tareas.filter((tar) => {
            return tar.id !== tarea.id;
        });
        setTareas(nuevoTar);
        localStorage.setItem('tareas', JSON.stringify(nuevoTar));
    }


    return (
        <div className='container mt-5'>
            <ul class="list-group" >
                {tareas.map((tarea, idx) => {
                    return (
                        <li class="list-group-item" key={idx} style={{ textDecoration: tarea.done ? "line-through" : "", }}>
                            {tarea.tarea}
                            <input class="form-check-input mt-0" type="checkbox" checked={tarea.done} onChange={() => handleCheck(tarea)}></input>
                            <button class="btn btn-danger float-end" onClick={() => handleDelete(tarea)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListaTareas;