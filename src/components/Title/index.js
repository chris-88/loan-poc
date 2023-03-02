import { Text } from "react-native";

export default function Title({ title }) {
  return (
    <Text style={{ fontFamily: "OpenSans_600SemiBold", fontSize: 16 }}>
      {title}
    </Text>
  );
}
