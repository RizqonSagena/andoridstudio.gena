import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Jackets</Text>
        <Text style={styles.subtitle}>Stylish shield,{"\n"}cold breeze.</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>928 Products</Text>
        </View>
      </View>

      <Image
        source={require("@/assets/images/jacket.png")}
        style={styles.modelImage}
        contentFit="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  container: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 20,
    height: 160,
    overflow: "hidden",
    flexDirection: "row",
  },

  content: {
    flex: 1,
    paddingTop: 22,
    paddingLeft: 22,
    paddingBottom: 20,
    paddingRight: 8,
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111111",
    lineHeight: 32,
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 19,
    color: "#6E6E6E",
  },

  badge: {
    marginTop: 16,
    alignSelf: "flex-start",
    backgroundColor: "#F7F7F7",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },

  badgeText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#1C1C1C",
  },

  modelImage: {
    width: "45%",
    height: "100%",
    alignSelf: "flex-end",
  },
});
