
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const criarPilhaNav = createStackNavigator();
import details from './pages/Details';
import Incidentes from './pages/Incidentes';
const stckNav = createStackNavigator();

export default function Routes(){
    return( 
        <NavigationContainer
        >
            <criarPilhaNav.Navigator screenOptions = { { headerShown:false }}>
                <criarPilhaNav.Screen name="incidentes" component={Incidentes}/>
                <criarPilhaNav.Screen name= "detalhes" component={details}/>
            </criarPilhaNav.Navigator>
        </NavigationContainer>


    );
}