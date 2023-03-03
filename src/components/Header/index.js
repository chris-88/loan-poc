import { View, Image, useWindowDimensions, Text } from "react-native";

export default function Header() {
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
      </View>
      <Image
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: "0%",
          resizeMode: "contain",
        }}
        source={require("../../assets/images/headerLogo.png")}
      />
      <View style={{ height: 12 }} />
    </View>
  );
}
