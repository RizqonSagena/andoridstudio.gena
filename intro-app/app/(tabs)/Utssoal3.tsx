import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Reusable Payment Item Component
interface PaymentItemProps {
    title: string;
    subtitle: string;
    icon: keyof typeof Ionicons.glyphMap;
}

const PaymentItem = ({ title, subtitle, icon }: PaymentItemProps) => (
    <Pressable style={style.card}>
        <View style={style.iconBox}>
            <Ionicons name={icon} size={24} color="#3D5BF6" />
        </View>
        <View style={style.textBox}>
            <Text style={style.cardTitle}>{title}</Text>
            <Text style={style.cardSubtitle}>{subtitle}</Text>
        </View>
    </Pressable>
);

const paymentMethods: PaymentItemProps[] = [
    {
        title: "Cash on Delivery",
        subtitle: "Have the right money ready.",
        icon: "layers-outline",
    },
    {
        title: "Mobile Banking",
        subtitle: "BCA, BRI, BSI and Mandiri",
        icon: "layers-outline",
    },
    {
        title: "Credit Card",
        subtitle: "Visa, Mastercard, AMEX, and JCB.",
        icon: "layers-outline",
    },
    {
        title: "E-Wallet",
        subtitle: "GoPay, OVO, Dana and ShopeePay.",
        icon: "layers-outline",
    },
    {
        title: "Emas",
        subtitle: "Transfer via virtual account.",
        icon: "layers-outline",
    },
];

export default function Payment() {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.content} showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <Text style={style.title}>Another Payments</Text>
                </View>

                {paymentMethods.map((item, index) => (
                    <PaymentItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        icon={item.icon}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    content: {
        padding: 20
    },
    header: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1A1A1A"
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    iconBox: {
        width: 52,
        height: 52,
        borderRadius: 12,
        backgroundColor: "#ECF0FF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
    textBox: {
        flex: 1
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "600",
        color: "#1A1A1A",
        marginBottom: 4
    },
    cardSubtitle: {
        fontSize: 14,
        color: "#8E8E93"
    },
});

