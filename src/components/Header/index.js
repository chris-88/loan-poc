import { useRouter } from "expo-router";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";

export default function Header() {
  const router = useRouter();
  return (
    <View>
      <View style={{ height: 47, backgroundColor: "#000066" }} />
      <View
        style={{
          height: 48,
          backgroundColor: "#efefef",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/NeedHelp/")}>
          <Text
            style={{
              alignSelf: "flex-end",
              marginRight: 18,
              fontFamily: "OpenSans_600SemiBold",
              fontSize: 16,
            }}
          >
            Need help?
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: "0%",
          resizeMode: "contain",
          zIndex: 1,
        }}
        source={require("../../assets/images/headerLogo.png")}
      />
      <View style={{ height: 12, backgroundColor: "transparent" }} />
    </View>
  );
}
