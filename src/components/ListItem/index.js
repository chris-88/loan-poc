import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({ title, icon, focus }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 12,
          backgroundColor: focus ? "#0000cc" : "#efefef",
          marginBottom: 8,
          flexDirection: "row",
          borderRadius: 6,
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={focus ? "white" : "#0000cc"}
        />
        <Text
          style={{
            fontFamily: focus ? "OpenSans_600SemiBold" : "OpenSans_400Regular",
            fontSize: 16,
            color: focus ? "white" : "black",
            textAlign: "center",
            marginLeft: 16,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
