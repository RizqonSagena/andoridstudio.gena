import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState<string | null>(null);

    function tambah() {
        setCount((prev) => prev + 1);
    }

    function kurang() {
        setCount((prev) => Math.max(0, prev - 1));
    }

    function reset() {
        setCount(0);
    }
    useEffect(() => {
        if (count === 7) {
            setText("RONALDO")
        }
        else if (count === 10) {
            setText("GOAT MESSI")
        }
        else {
            setText("");
        }
    }, [count]);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
            }}
        >
            <View
                style={{
                    width: "100%",
                    maxWidth: 360,
                    alignItems: "center",
                    gap: 20,
                    paddingVertical: 24,
                }}
            >
                <Text
                    style={{
                        fontSize: 88,
                        lineHeight: 96,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {text || count}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 16,
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    <Pressable
                        style={{
                            paddingVertical: 12,
                            paddingHorizontal: 18,
                            borderWidth: 1,
                            borderRadius: 12,
                        }}
                        onPress={kurang}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                            }}
                        >
                            Kurang
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            paddingVertical: 12,
                            paddingHorizontal: 18,
                            borderWidth: 1,
                            borderRadius: 12,
                        }}
                        onPress={tambah}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                            }}
                        >
                            Tambah
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            paddingVertical: 12,
                            paddingHorizontal: 18,
                            borderWidth: 1,
                            borderRadius: 12,
                        }}
                        onPress={reset}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                            }}
                        >
                            Reset
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}