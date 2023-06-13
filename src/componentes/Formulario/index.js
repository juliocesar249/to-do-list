import './formulario.css';
import Botao from '../Botao';
import Campo from '../Campo';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ aoAdicionarNota }) => {

    const [texto, setTexto] = useState('');

    function criarNota(e) {
        e.preventDefault();
        e.target.reset();
        const nota = {id: uuidv4(), texto: texto};
        console.log(nota);
        aoAdicionarNota(nota);
    }


    return (
        <section className='adicionar'>
            <form className='adicionar__formulario' onSubmit={criarNota}>
                <Campo tipo={'text'} aoAlterado={valor => setTexto(valor)}/>
                <Botao tipo={'submit'} texto={<AiOutlinePlusCircle size={30} className='adicionar__botao'/>}/>
            </form>
        </section>
    );
}

export default Formulario;