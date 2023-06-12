import './botao.css';

const Botao = ({texto, tipo}) => {
    return <button type={tipo} className='botao'>
        {texto}
    </button>
}

export default Botao;