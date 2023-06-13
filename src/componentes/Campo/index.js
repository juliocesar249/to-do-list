import './campo.css';

const Campo = ({tipo, aoAlterado}) => {
    return <input type={tipo} className='campo' onChange={evento => aoAlterado(evento.target.value)}/>
}

export default Campo;