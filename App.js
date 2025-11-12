import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';

import { StyleSheet, View, ScrollView } from 'react-native';
import InfoPartit from './components/InfoPartit';

const App = () => {
  const [equip, setEquip] = useState('');
  const [partitsMostrar, setPartitsMostrar] = useState([]);

  const llistatPartits = [
    { equip1: "Levante", equip2: "Girona", arbitro: "Negreira", estadi: null },
    { equip1: "Valencia", equip2: "Elche", arbitro: "Negreira Jr", estadi: null },
    { equip1: "Barcelona", equip2: "Villarreal", arbitro: "Negreira", estadi: "Montjuic" },
    { equip1: "Levante", equip2: "Elche", arbitro: "Negreira Jr", estadi: null },
    { equip1: "Barcelona", equip2: "Valencia", arbitro: "Negreira Jr", estadi: null },
  ];

  const buscarPartits = () => {
    if (equip.trim() === '') {
      setPartitsMostrar([]); 
      return;
    }

    const resultats = llistatPartits.filter((elem) =>
      elem.equip1.toLowerCase().includes(equip.toLowerCase()) ||
      elem.equip2.toLowerCase().includes(equip.toLowerCase())
    );

    setPartitsMostrar(resultats);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Searchbar
        placeholder="Introdueix el nom del equip..."
        onChangeText={setEquip}
        value={equip}
        onIconPress={buscarPartits}
        style={styles.searchBar}
        iconColor="#333"
      />

      <ScrollView style={styles.scroll}>
        {partitsMostrar.map((partit, ind) => (
          <InfoPartit
            key={ind.toString()}
            equip1={partit.equip1}
            equip2={partit.equip2}
            arbitro={partit.arbitro}
            estadi={partit.estadi}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBar: {
    marginVertical: 10,
    borderRadius: 10,
  },
  scroll: {
    paddingTop: 10,
    flex: 1,
  },
});

export default App;
