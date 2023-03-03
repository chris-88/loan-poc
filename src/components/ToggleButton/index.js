import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function ToggleButton({ title }) {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: pressed ? "#000066" : "transparent",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#dcdcdc",
        borderWidth: pressed ? 0 : 1,
      }}
      onPress={() => setPressed((previousState) => !previousState)}
    >
      <Text
        style={{
          color: pressed ? "white" : "black",
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
