import { Text } from "react-native";

export default function TextBlock({ text }) {
  return (
    <Text
      style={{
        fontFamily: "OpenSans_400Regular",
        fontSize: 16,
        paddingBottom: 20,
      }}
    >
      {text}
    </Text>
  );
}
