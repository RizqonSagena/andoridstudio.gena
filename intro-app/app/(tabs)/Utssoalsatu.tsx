import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Utssoalsatu() {
    return (
        <SafeAreaView>
            <View style={styles.container}>{[
                <View style={[styles.box, { backgroundColor: '#FF5722' }]} key="1">
                    <Text style={styles.text}>Item 1</Text>
                </View>,
                <View style={[styles.box, { backgroundColor: '#FFC107' }]} key="2">
                    <Text style={styles.text}>Item 2</Text>
                </View>,
                <View style={[styles.box, { backgroundColor: '#2196F3' }]} key="3">
                    <Text style={styles.text}>Item 3</Text>
                </View>,
            ].reverse()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        margin: 20,
        backgroundColor: "#f2f2f2",
    },
    box: {
        width: 300,
        height: 300,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});
