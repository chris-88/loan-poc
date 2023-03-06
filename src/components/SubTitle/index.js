import { Text } from "react-native";

export default function SubTitle({ text }) {
  return (
    <Text
      style={{
        fontFamily: "OpenSans_400Regular",
        fontSize: 14,
        paddingTop: 6,
      }}
    >
      {text}
    </Text>
  );
}
