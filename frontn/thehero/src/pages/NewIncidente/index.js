import React from 'react';
import logoSvg from '../../assets/logo.svg';
import { FiArrowLeft  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
import api from '../../services/api';

export default function Incidente(){

    const ongid = localStorage.getItem('OngId');
    const [title,setTitulo] = useState('');
    const [description,setDescricao] = useState('');
    const [value,setValor] = useState('');
    const cabecc = { headers:{
    autorizacao: localStorage.getItem('ongId')
    }
}

    async function handleIncidente(evento){
        evento.preventDefault();
    const incidente = { title,
        description, 
        value,
            };


    console.log(`crase ou ${incidente.value}`);
    try{
        const incidentes = await api.post('Incidentes',incidente,cabecc);

    }catch(err){
        alert(`fodeu pois, ${err}`);
    }

}

    return (
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoSvg} alt="logo"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um </p>
                <Link className="backlink" to="/Profile">
                    <FiArrowLeft size={15} color="#E02041"/>
                    Voltar para home
                </Link>

            </section>
            <form onSubmit={handleIncidente}>
                <input placeholder="titulo do caso" value={title} onChange={evento => setTitulo(evento.target.value)}/>
                <textarea placeholder="descricao" value={description} onChange={evento => setDescricao(evento.target.value)}/>
                <input placeholder="valor em reais"  value={value} onChange={evento => setValor(evento.target.value)}/>

                

                <button className="button" type="submit">Cadastrar </button>

            </form>
        </div>
    </div>
    );
}