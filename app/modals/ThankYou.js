import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function ThankYou() {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(52, 52, 52, 0.5)",
      }}
    >
      <View
        style={{
          height: "25%",
          width: "50%",
          backgroundColor: "white",
          borderRadius: 40,
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ padding: 16, flex: 1, color: "blue", fontWeight: "400" }}
        >
          Thank you!
        </Text>
        <TouchableOpacity
          onPress={() => {
            closeModal();
          }}
        >
          <Text style={{ padding: 16 }}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
