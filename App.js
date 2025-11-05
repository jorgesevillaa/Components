import { React, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import InfoEquip from "./components/InfoEquip";
import InfoPartit from './components/InfoPartit';
const App = () => {
  // Pantalla Principal
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titol}>Llistat de partits:</Text>
      <InfoPartit equip1 = "Levante" equip2="Girona" arbitro= "Negreira"/>
      <InfoPartit equip1 = "Elche" equip2="Valencia" arbitro= "Negreira Jr"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: "#fff",
  },
  titol: {
    margin: 5,
    fontSize: 25,
    fontWeight: "bold",

  }
});
export default App;