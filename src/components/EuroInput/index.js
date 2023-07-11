import { View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function EuroInput({ placeholder }) {
  return (
    <View
      style={{
        marginTop: 12,
        paddingVertical: 12,
        borderColor: "#dcdcdc",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingHorizontal: 12,
          borderColor: "#ccc",
          borderRightWidth: 1,
          marginRight: 12,
        }}
      >
        <MaterialIcons name="euro-symbol" size={16} color="black" />
      </View>
      <TextInput
        placeholder={placeholder ? { placeholder } : "Please enter"}
        placeholderTextColor={"#ccc"}
        keyboardType="numbers-and-punctuation"
        style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}
      />
    </View>
  );
}
