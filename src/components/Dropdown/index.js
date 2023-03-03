import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const Items = [
  { id: 0, title: "Car loan" },
  { id: 1, title: "Green car loan" },
  { id: 2, title: "Home improvements" },
  { id: 3, title: "Green home improvements" },
  { id: 4, title: "Wedding" },
  { id: 5, title: "Education expenses" },
  { id: 6, title: "Graduate" },
];

export default function Dropdown({ placeholder }) {
  const [pressed, setPressed] = useState(false);
  const onPress = () => {
    setPressed((previousState) => !previousState);
  };
  const [selected, setSelected] = useState("");
  return (
    <View style={{ zIndex: 1 }}>
      <View
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
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="down" size={16} color="#cccccc" />
        </TouchableOpacity>
      </View>
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
          data={Items}
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