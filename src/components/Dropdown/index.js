import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function Dropdown({ placeholder, items, zIndex }) {
  const [pressed, setPressed] = useState(false);
  const onPress = () => {
    setPressed((previousState) => !previousState);
  };
  const [selected, setSelected] = useState("");
  return (
    <View style={{ zIndex }}>
      <Pressable
        onPress={onPress}
        style={{
          marginTop: 12,
          padding: 12,
          borderColor: "#dcdcdc",
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          value={selected}
          placeholder={placeholder}
          placeholderTextColor="#cccccc"
          style={{ fontFamily: "OpenSans_400Regular", fontSize: 16 }}
        />
        <AntDesign name="down" size={16} color="#cccccc" />
      </Pressable>
      <View
        style={{
          marginTop: 5,
          borderColor: "#ccc",
          borderWidth: pressed ? 1 : 0,
          borderRadius: 4,
          backgroundColor: "white",
          position: "absolute",
          top: 60,
          width: "100%",
        }}
      >
        <FlatList
          data={items}
          style={{
            height: pressed ? 120 : 0,
          }}
          renderItem={({ item }) => (
            <View style={{ padding: 6 }}>
              <TouchableOpacity
                onPress={() => {
                  setSelected(item.title);
                  setPressed(false);
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans_400Regular",
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
