import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Payment() {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.content}>
                <View style={style.header}>
                    <Text style={style.title}>Another payment</Text>
                </View>
                <Pressable style={style.card}>
                    <View style={style.iconBox}>
                        <Ionicons name="layers-outline" size={24} color="#3D5BF6" />
                    </View>
                    <View style={style.textBox}>
                        <Text style={style.cardTitle}>Cash on Delivery</Text>
                        <Text style={style.cardSubtitle}>Have the right money ready</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },
    content: { padding: 16 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    title: { fontSize: 20, fontWeight: "700", color: "#111" },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
    },
    iconBox: {
        width: 44,
        height: 44,
        borderRadius: 10,
        backgroundColor: "#EEF1FE",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
    },
    textBox: { flex: 1 },
    cardTitle: { fontSize: 15, fontWeight: "700", color: "#111", marginBottom: 3 },
    cardSubtitle: { fontSize: 13, color: "#888" },

});
