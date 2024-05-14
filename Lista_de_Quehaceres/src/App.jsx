import React, { useState, useEffect } from 'react'
import IngresoTareas from './componentes/IngresoTareas.jsx'
import ListaTareas from './componentes/ListaTareas.jsx'
import './App.css'



const App = () => {

    const [tareas, setTareas] = useState([]);
    console.log("desde app " + tareas);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('tareas'));
        if (saved) {
            setTareas(saved);
        }
    }, []);


    return (
        <div className='container mt-5'>
            <h2>Ingreso tareas</h2>
            <IngresoTareas tareas={tareas} setTareas={setTareas} />
            <hr />
            <h2>Lista de tareas</h2>
            <ListaTareas tareas={tareas} setTareas={setTareas} />
        </div>
    )
};

export default App;