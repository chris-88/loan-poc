import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const onPress = () => {
    router.push("/main/");
  };
  return (
    <View style={{ backgroundColor: "#0000cc", flex: 1 }}>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans_700Bold",
            fontSize: 42,
            color: "white",
          }}
        >
          Welcome to Bank of Ireland
        </Text>
        <Text
          style={{
            paddingTop: 40,
            fontFamily: "OpenSans_400Regular",
            fontSize: 20,
            color: "white",
          }}
        >
          This is a POC mobile app developed by the Digital COE using Expo and
          React Native
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          margin: 16,
          marginBottom: 30,
          padding: 16,
          backgroundColor: "#00ffc5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans_700Bold",
            fontSize: 18,
            color: "#0000cc",
          }}
        >
          Let's go!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
