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
          height: "20%",
          width: "50%",
          backgroundColor: "red",
        }}
      >
        <Text style={{ padding: 16 }}>Thank you!</Text>
        <TouchableOpacity
          onPress={() => {
            closeModal();
          }}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
