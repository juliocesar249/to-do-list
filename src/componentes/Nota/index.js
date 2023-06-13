import Botao from '../Botao';
import './nota.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Nota = ({item, aoDeletarNota}) => {

    return (
        <li key={item.id}>
            <article className='nota'>
                <div className='nota__texto'>{item.texto}</div>
                <Botao texto={<AiOutlineCheckCircle size={20} className='nota__icone' />} aoClicar={() => aoDeletarNota(item.id)}/>
            </article>
        </li>
    )
}

export default Nota;