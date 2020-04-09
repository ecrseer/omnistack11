import React,{ useState } from 'react';
import logoSvg from '../../assets/logo.svg';
import { FiArrowLeft  } from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom';
import './style.css';

import api from '../../services/api';

export default function Registro(){
    const [name,setName] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [email,setEmail] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUF] = useState('');


    const history= useHistory();

    async function handleRegistro(evento){
        evento.preventDefault();

        const regisOng = {name,        
        email,
        whatsapp,
        city,
        uf,

        
        };
        try{

        const resposta = await api.post('ongs', regisOng);
        
        alert(`seu id: ${resposta.data.id}`);//crase necessaria para variavel ${} reac
        history.push('/');
        }catch(err){
            alert('deu merda');
            console.log(regisOng);
            console.log(err);
        }

    }
    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoSvg} alt="logo"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro,entre na plataforma e ajude pessLorem ipsudmploroemodmofmeo </p>
                <Link className="backlink" to="/">
                    <FiArrowLeft size={15} color="#E02041"/>
                    Não tenho cadastro
                </Link>

            </section>
            <form onSubmit={handleRegistro}>
                <input placeholder="nome da Ong" 
                value={name} onChange={evento => setName(evento.target.value) } />
                <input type="email" placeholder="email"
                value={email} onChange={evento => setEmail(evento.target.value) }/>
                <input placeholder="whatsapp"
                value={whatsapp} onChange={evento => setWhatsapp(evento.target.value) }/>

                <div className="input-group">
                    <input placeholder="cidade"
                    value={city} onChange={evento => setCity(evento.target.value) }/>
                    <input placeholder="uf" style={ { width: 80 } }
                    value={uf} onChange={evento => setUF(evento.target.value) }/>
                </div>

                <button className="button" type="submit">Cadastrar </button>

            </form>
        </div>
    </div>
    );
}