import { View, Text } from "react-native";

export default function services() {
  return (
    <View
      style={{
        flex: 1,
        margin: 16,
        padding: 16,
        backgroundColor: "#00ffc5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
      }}
    >
      <Text
        style={{
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 24,
          color: "#0000cc",
        }}
      >
        This is the Services section
      </Text>
    </View>
  );
}
