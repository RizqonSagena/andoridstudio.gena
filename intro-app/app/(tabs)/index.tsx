import { Image } from "expo-image";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* Komponen View */}
      <View>
        {/* komponen text */}
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          Prabowo
        </Text>
      </View>
      {/* komponen image //komponen image dengan gambar internet */}
      <Image
        source={
          "https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/3bfcc4360c44f37815dc1e59f75818935cbfc41b.png"
        }
        style={{
          width: 300,
          height: 300,
        }}
      />
      {/* komponen image dengan gambar lokal */}
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </SafeAreaView>
  );
}
