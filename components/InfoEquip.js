import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { getObjEquip, getFitxaEquip } from "../utils/funcionsEquips";

const InfoEquip = (props) => {
    let objecte = getObjEquip(props.nomEquip);
    let fitxa = getFitxaEquip(objecte);


    return (
        <View style={styles.caixaGroga}>
            <Image
                source={{ uri: fitxa.imatgeEscut }}
                style={{ width: 100, height: 100 }}
            />
            <Text style={styles.gran}>{fitxa.nom}</Text>
            <Text>{fitxa.anyFundacio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    caixaGroga: {
    backgroundColor: "yellow",
    height: 150,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 5,
    },
    gran: {
        fontSize: 20
    }
});

export default InfoEquip;