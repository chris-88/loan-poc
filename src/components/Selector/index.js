import { View, Text } from "react-native";

export default function Selector({ titles }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 12,
        justifyContent: "space-between",
      }}
    >
      {titles.map((item) => (
        <View
          style={{
            flex: 1,
            backgroundColor: "#000066",
            padding: 12,
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
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

{
  /* <View
  style={{
    flex: 1,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    padding: 12,
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
</View> */
}
