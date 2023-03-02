import { View, Text } from "react-native";

export default function Selector() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "#000066",
          width: 170,
          height: 47,
          marginTop: 9,
          marginRight: 18,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
            color: "white",
            alignSelf: "center",
          }}
        >
          New loan
        </Text>
      </View>
      <View
        style={{
          borderColor: "#dcdcdc",
          borderWidth: 1,
          width: 170,
          height: 47,
          marginTop: 9,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
            color: "black",
            alignSelf: "center",
          }}
        >
          Top up loan
        </Text>
      </View>
    </View>
  );
}
