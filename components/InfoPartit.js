import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import InfoEquip from "./InfoEquip";
import { getObjEquip, getNomEstadi, getIntStadiumCapacity } from "../utils/funcionsEquips"

const InfoPartit = (props) => {
    let arbitro = props.arbitro;
    let equip = getObjEquip(props.equip1);
    let estadi = getNomEstadi(equip);
    let capacitat = getIntStadiumCapacity(equip);
    return (
        <View style={styles.container}>
            <View style={styles.rows}>
                <InfoEquip style={styles.equipsContainer} nomEquip={props.equip1} />
                <InfoEquip style={styles.equipsContainer} nomEquip={props.equip2} />
            </View>
            <View>
                <Text style={styles.textEstadi}>{estadi} / Capacitat: {capacitat}</Text>
                <Text style={styles.textEstadi}>Arbitro: {arbitro}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rows: {
        flexDirection: "row",

    },
    container: {
        backgroundColor: "#eee",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 2
    },
    equipsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        backgroundColor: "silver",
        borderRadius: 10,
        paddingVertical: 10,
    },
    textEstadi: {
        marginTop: 5,
        fontSize: 16,
        textAlign: "center",
    },
});


export default InfoPartit;