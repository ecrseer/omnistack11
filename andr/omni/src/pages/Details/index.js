import React, { useState } from 'react';
import {useNavigation,useRoute} from '@react-navigation/native';
import { View,Image,Text,TouchableOpacity,FlatList,Linking } from 'react-native';
import {Feather } from '@expo/vector-icons';
import logoPng from '../assets/logo.png';
import styles from './styles';

import * as MailComposer from 'expo-mail-composer';

export default function Details(){
    const usarNavgtn = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const total = route.params.total;
    
    const message = `Olá empresa ${incident.name}, gostaria de ajudar com ${Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).
    format(incident.value)} no caso da ${incident.title}`;

    function navegarDevolta(){
        usarNavgtn.goBack();
    }
    function mandarEmail(){
        MailComposer.composeAsync({
            subject:`Herói do caso: ${incident.title}`,
            recipients:[incident.email],
            body:message
    })
    }
    function mandarWpp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}text=${message}`);
    }
    return (
    <View style={ styles.container}>

        <View style = { styles.header}>
            <Image source ={logoPng}/>
            <Text Style ={ styles.headerText}>
            Total de <Text Style ={ styles.headerText.bold}> {total} casos</Text>
            </Text>
            <TouchableOpacity onPress={navegarDevolta}>
                <Feather name="arrow-left" size={28} color="#E82041" />
            </TouchableOpacity>



        </View>

    <View style={styles.incidente}>
    
        <Text style={[styles.IncidenteProp,{marginTop:0}]}> ONG: </Text>
        <Text style={styles.IncidenteValor}> {incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.IncidenteProp}> CASO: </Text>
        <Text style={styles.IncidenteValor}> {incident.title} </Text>

        <Text style={styles.IncidenteProp}> Valor: </Text>
        <Text style={styles.IncidenteValor}> {Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).
                format(incident.value)} </Text>
        

    </View>

    <View style={styles.contatoCa}>
            <Text style={styles.HeroiTitulo}> Salve o dia! </Text>
            <Text style={styles.HeroiTitulo}> Seja o heroi desse caso </Text>
            <Text style={styles.HeroiDescri}> Entre em contato: </Text>

            <View style={styles.acoes}>
                <TouchableOpacity style={styles.acao} onPress={mandarWpp}>
                    <Text style={styles.acoesTexto}> Whatsapp </Text>    
                </TouchableOpacity>

                <TouchableOpacity style={styles.acao} onPress={mandarEmail}>
                    <Text style={styles.acoesTexto}> E-mail </Text>    
                </TouchableOpacity>
            </View>
        </View>




</View>
    );
    
}