import { Text } from "react-native";

export default function PageHeading({ title }) {
  return (
    <Text
      style={{
        fontSize: 24,
        paddingTop: 50,
        paddingBottom: 40,
        fontFamily: "OpenSans_700Bold",
        alignSelf: "center",
        textAlign: "center",
      }}
    >
      {title}
    </Text>
  );
}
