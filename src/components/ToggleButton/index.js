import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function ToggleButton({ option1, option2 }) {
  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);

  return (
    <View style={{ flexDirection: "row", paddingTop: 14 }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: opt1 ? "#000066" : "transparent",
          padding: 12,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#dcdcdc",
          borderWidth: opt1 ? 0 : 1,
        }}
        onPress={() => {
          setOpt1((previousState) => !previousState), setOpt2(false);
        }}
      >
        <Text
          style={{
            color: opt1 ? "white" : "black",
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <View style={{ width: 10 }} />
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: opt2 ? "#000066" : "transparent",
          padding: 12,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#dcdcdc",
          borderWidth: opt2 ? 0 : 1,
        }}
        onPress={() => {
          setOpt2((previousState) => !previousState), setOpt1(false);
        }}
      >
        <Text
          style={{
            color: opt2 ? "white" : "black",
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
