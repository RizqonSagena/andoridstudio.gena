import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type props = {
    title: string;
    price: number;
    discount?: number;
};

const ProductCard = ({ title, price, discount = 0 }: props) => {
    // Menghitung harga akhir (price - discount)
    const finalPrice = price - discount;

    return (
        <View style={style.card}>
            <Text style={style.title}>{title}</Text>

            {discount > 0 ? (
                <>
                    <Text style={[style.price, { textDecorationLine: "line-through" }]}>Rp {price.toLocaleString('id-ID')}</Text>
                    <Text style={style.discountText}>Diskon Rp {discount.toLocaleString('id-ID')}</Text>
                    <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 16 }}>
                        Harga Akhir: Rp {finalPrice.toLocaleString('id-ID')}
                    </Text>
                </>
            ) : (
                <>
                    <Text style={style.price}>Rp {price.toLocaleString('id-ID')}</Text>
                    <Text style={style.normalText}>Harga Normal</Text>
                </>
            )}
        </View>
    );
};

export default function product() {
    return (
        <SafeAreaView>
            <View style={style.container}>
                <ProductCard title="Laptop" price={7000000} discount={1500000} />
                <ProductCard title="Mouse" price={150000} discount={0} />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        padding: 15,
        marginBottom: 15,
        backgroundColor: "#eee",
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        color: "gray",
        marginBottom: 8,
    },
    discountText: {
        fontSize: 14,
        color: "red",
        fontWeight: "bold",
    },
    normalText: {
        fontSize: 14,
        color: "green",
        fontWeight: "bold",
    },
});