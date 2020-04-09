import React, {useEffect, useState} from 'react';
import { View,Image,Text,TouchableOpacity,FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather } from '@expo/vector-icons';
import logoPng from '../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidentes(){
    const usarNavgtn = useNavigation();
    const [incidentes,setIncidentes] = useState([]);
    const [total,setTotal] = useState(0);
    const [pagina,setPagina] = useState(1);
    const [carregar,setCarregar] = useState(false);

    function navegarParaDetalh(incident){
        usarNavgtn.navigate('detalhes',{incident,total});
    }
    function deletarIncid(){
        setIncidentes([]);
        carregarIncidentes();
    }
    async function carregarIncidentes(){
        if(carregar){
            return;
        }
        
        if(total>0 && incidentes.length == total){
            return;
        }

        setCarregar(true);
        
        const page = pagina;
        const resposta = await api.get('Incidentes',{ params:{page} });
        setIncidentes([...incidentes, ...resposta.data]);

        
        setTotal(resposta.headers['x-total-count']);
        setPagina(pagina + 1);
        setCarregar(false);
        //console.log(incidentes[1].name);

    }
    useEffect(()=>{
        carregarIncidentes();} ,[]
    );
    return (<View style={styles.container}>
        <View style = { styles.header}>
            <Image source ={logoPng}/>
            <Text Style ={ styles.headerText}>
            Total de <Text Style ={ styles.headerText.bold}>{total} casos</Text>
            </Text>
            <TouchableOpacity onPress={deletarIncid}
                style={styles.botao}>
                    <Text style={styles.textoBotao}> Detds </Text>
                    <Feather name="arrow-right" size={16} color="#E02041"/>
                </TouchableOpacity>

        </View>
        <Text style={styles.title}> Bem-vindo </Text>
        <Text style={styles.descricao}> Escolha um dos casos 
        abaixo e salve o dia </Text>
        <FlatList
        data= { incidentes }
        style={styles.IncidentesLista}
        keyExtractor={incident => String(incident.id)}
        onEndReached={carregarIncidentes}
        onEndReachedThreshold={0.3}
        //showsVerticalScrollIndicator={false}
        renderItem={( {item:incident} ) => ( 
            <View style={styles.incidente}>
                <Text style={styles.IncidenteProp}> ONG: </Text>
                <Text style={styles.IncidenteValor}> {incident.name}  </Text>

                <Text style={styles.IncidenteProp}> CASO: </Text>
                <Text style={styles.IncidenteValor}> {incident.title} </Text>

                <Text style={styles.IncidenteProp}> Valor: </Text>
                <Text style={styles.IncidenteValor}> {Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).
                format(incident.value)} </Text>

                <TouchableOpacity onPress={()=>navegarParaDetalh(incident)}
                style={styles.botao}>
                    <Text style={styles.textoBotao}> detalhes </Text>
                    <Feather name="arrow-right" size={16} color="#E02041"/>
                </TouchableOpacity>
               </View>
               
        )}

        />
         
    </View>);
    
}
