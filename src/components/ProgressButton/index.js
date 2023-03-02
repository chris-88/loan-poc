import { View, Text } from "react-native";

export default function ProgressButton({ title }) {
  return (
    <View
      style={{
        backgroundColor: "#0000ff",
        marginTop: 66,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 16,
          padding: 19,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
