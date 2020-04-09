import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return ( 
    <Routes/>
/* 
    {<View style={styles.container}>
      <Text style={styles.tito}>Bethe hero</Text>
    </View>} */
  );
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: '#2119c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tito: {
    color:'#E1E10E',
    fontSize: 53,
    fontWeight: 'bold',
  },
});
