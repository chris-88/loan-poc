import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProgressButton({ onPress, backEnable }) {
  const router = useRouter();
  return (
    <View
      style={{
        position: "absolute",
        alignItems: "center",
        bottom: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: "90%",
      }}
    >
      <TouchableOpacity
        style={{
          width: !backEnable ? "0%" : "25%",
          alignItems: "center",
          padding: !backEnable ? 0 : 6,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => {
          router.back();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text
          style={{
            color: "black",
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: !backEnable ? "100%" : "70%",
          alignItems: "center",
          backgroundColor: "#000066",
          borderWidth: 1,
          borderColor: "#000066",
          padding: 12,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}
