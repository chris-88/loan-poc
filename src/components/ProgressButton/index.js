import { View, Text, TouchableOpacity } from "react-native";

export default function ProgressButton({ pageBack, pageForward }) {
  return (
    <View
      style={{
        position: "absolute",
        alignItems: "center",
        bottom: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: "90%",
      }}
    >
      <TouchableOpacity
        style={{
          width: "25%",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#dcdcdc",
          padding: 12,
        }}
        onPress={pageBack}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "70%",
          alignItems: "center",
          backgroundColor: "#000066",
          borderWidth: 1,
          borderColor: "#000066",
          padding: 12,
        }}
        onPress={pageForward}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}
