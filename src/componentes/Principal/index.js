import './principal.css';
import { useState } from 'react';
import Formulario from '../Formulario';
import Lista from '../Lista';


const Principal = () => {
    const [notas, setNotas] = useState([]);

    function aoAdicionarNota(nota) {
        setNotas([...notas, nota]);
    }

    function aoDeletarNota(id) {
        setNotas(notas.filter(nota => nota.id !== id));
    }

    return <main className='principal'>
        <Formulario aoAdicionarNota={aoAdicionarNota}/>
        <Lista notas={notas} aoDeletarNota={aoDeletarNota}/>
    </main>
}

export default Principal;