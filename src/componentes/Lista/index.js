import Nota from '../Nota';
import './lista.css';
import { v4 as uuidv4 } from 'uuid';

const Lista = ({notas, aoDeletarNota}) => {

    return (
        <ul className='principal__lista'>
            {notas.length ? notas.map(nota => <Nota item={nota} aoDeletarNota={aoDeletarNota}/> ) : <li className='vazio' key={uuidv4()}>Ainda não há nenhuma nota!</li>}
        </ul>
    )
}

export default Lista;