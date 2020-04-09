import {StyleSheet} from 'react-native';
 import Constants from 'expo-constants'; 
export default StyleSheet.create({
    container:{        
        flex:1,
        paddingHorizontal:23,
        paddingTop: Constants.statusBarHeight +20,
    },
    title:{
        fontSize:30,    
        marginBottom:16,
        marginTop:48,
        color:'#13131a',
        fontWeight: 'bold',
    },
    descricao:{
        fontSize:16,
        lineHeight:24,
        color:'#737380',
        
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        
    },
    headerText:{
        fontSize:15,
        color:'#737380',        
    },
    headerTextBold:{
        fontWeight:'bold',
    },
    IncidentesLista:{
        marginTop:20,
    },
    incidente:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom: 32,

    },IncidenteProp:{
        fontSize:14,
        fontWeight:'bold',
        color:'grey',

    },IncidenteValor:{
        marginTop:14,
        marginBottom:14,
        fontSize:14,
        color:'#737380',
        
    },botao:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textoBotao:{
        color:'#EE2222',
    },

});