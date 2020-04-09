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
        marginBottom: 16,
        marginTop: 48

    },IncidenteProp:{
        fontSize:14,
        fontWeight:'bold',
        color:'grey',
        marginTop:20,

    },IncidenteValor:{
        marginTop:7,
        marginBottom:7,
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

    contatoCa:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom: 16,
        
    },
    HeroiTitulo:{
        fontWeight:"bold",
        fontSize:23,
        lineHeight:23,
        color:"#13131a"
    },
    HeroiDescri:{
        
        fontSize:15,
        marginTop:16,
        
    },
    acoes:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    acao:{
        backgroundColor:"#e02041",
        borderRadius:9,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    acoesTexto:{
        color:'#FFF',
        fontSize:16,
    }
});