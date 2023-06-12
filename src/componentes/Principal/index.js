import Botao from '../Botao';
import './principal.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Campo from '../Campo';

const Principal = () => {
    return <main className='principal'>
        <div className='principal__adicionar'>
            <form className='adicionar__formulario'>
                <Campo tipo={'text'}/>
                <Botao tipo={'submit'} texto={<AiOutlinePlusCircle size={30} className='adicionar'/>}/>
            </form>
        </div>
    </main>
}

export default Principal;