import React,{useState} from 'react';
import { FiLogIn  } from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom';
import './style.css';

import heroespng from '../../assets/heroes.png';
import logoSvg from '../../assets/logo.svg';

import api from '../../services/api';
export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();
    
   
    var cabectc = {
        headers: {
            autorizacao: id,
        }
    };

    async function handleLogin(evento){
        evento.preventDefault();
        
        

        try{
            alert(`bem vindo ${ cabectc.headers.autorizacao }`);        
            var response = await api.post(`sessao`,{},cabectc);
            alert(`bem vindo ${response.data.name}`);
            
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name); 
            
            
            history.push('/profile');

        }catch(err){
            alert("falha no login");

        }    
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={ logoSvg } alt="heroi" />

                <form onSubmit={handleLogin} >
                    <h1> Faça seu logon</h1>
                    <input placeholder="Sua ID"
                    value={id} onChange={evento => setId(evento.target.value) }/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="backlink" to="/registro">
                        <FiLogIn size={16} color="#E02041 "/>
                        Não tenho cadastro</Link>

                </form>

            </section>
            <img src={heroespng} alt="her" />
        </div>


    
    );

}