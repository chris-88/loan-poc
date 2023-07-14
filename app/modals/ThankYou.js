import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSearchParams } from "expo-router";

export default function ThankYou() {
  const params = useSearchParams();
  const router = useRouter();
  const next = params.next;
  const closeModal = () => {
    router.replace(next);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(52, 52, 52, 0.6)",
      }}
    >
      <View
        style={{
          height: "70%",
          width: "80%",
          backgroundColor: "white",
          borderRadius: 40,
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            padding: 16,
            color: "blue",
            fontWeight: "500",
            fontSize: 28,
          }}
        >
          {params.title}
        </Text>
        <View
          style={{
            marginVertical: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons
            name={params.icon}
            size={100}
            color="#00ffc5"
          />
        </View>
        <Text
          style={{
            flex: 1,
            marginTop: 16,
            fontSize: 18,
            fontWeight: "300",
            lineHeight: 25,
          }}
        >
          {params.message}
        </Text>
        <TouchableOpacity
          onPress={() => {
            closeModal();
          }}
          style={{
            padding: 16,
            marginBottom: 20,
            width: "90%",
            backgroundColor: "blue",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
