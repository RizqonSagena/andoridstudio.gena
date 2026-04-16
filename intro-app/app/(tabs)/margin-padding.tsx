import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MarginPaddingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerBox}>
        <Text style={styles.label}>Margin (outside)</Text>
        <View style={styles.innerBox}>
          <Text style={styles.label}>Padding (inside)</Text>
          <View style={styles.contentBox}>
            <Text style={styles.contentText}>Content</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  outerBox: {
    margin: 20,
    backgroundColor: "#E3F2FD",
    borderWidth: 2,
    borderColor: "#1565C0",
    borderStyle: "dashed",
    padding: 16,
    borderRadius: 12,
  },
  innerBox: {
    margin: 16,
    backgroundColor: "#FFF3E0",
    borderWidth: 2,
    borderColor: "#E65100",
    borderStyle: "dashed",
    padding: 20,
    borderRadius: 8,
  },
  contentBox: {
    backgroundColor: "#C8E6C9",
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E7D32",
  },
});
