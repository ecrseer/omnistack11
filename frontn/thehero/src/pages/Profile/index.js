import React,{useState,useEffect} from 'react';
import logoSvg from '../../assets/logo.svg';
import { Link,useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

export default function Profile(){
    const history = useHistory();
    const [incidentes, setIncidentes] = useState([]);
    
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const cabecc = {
        headers: {
            autorizacao: ongId,
        }
    }

    async function handleDeletarIncidentes(id){
        try{
            await api.delete(`incidentes/${id}`,cabecc);
            setIncidentes(incidentes.filter(
                incidente => incidente.id !== id));
        }catch(err){
            alert(`Erro ao deletar, tente mais tarde`);
            alert(`deu erro: ${err}`);
        }
    }



    function autorizar(){
        api.get('profile', cabecc ).then(response => {
                     setIncidentes(response.data);
        }) 
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/');

    }
    //use effect executa sempre que o segundo parametro é alterado
    useEffect(autorizar , [ongId]); 

    return(
        <div className="profile-container">
            <header>
                <img src={logoSvg} alt ="be te "/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidentes/new">Cadastrar</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18}/>
                </button>

            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
               {incidentes.map(incidente =>

                <li key={incidente.id}>
                <strong>Caso: </strong>
                <p>{incidente.title}</p>

                <strong>Descricao: </strong>
                <p>{incidente.description}</p>

                <strong>Valor: </strong>
                <p>{Intl.NumberFormat('pt-BR'
                ,{ style: 'currency', currency:'BRL'})
                .format(incidente.value)}</p>
                <button type="button" onClick={()=> handleDeletarIncidentes(incidente.id)}>
                    <FiTrash2 size={15}/></button>
                </li>

                )
                }
            </ul>
        </div>
    );
}