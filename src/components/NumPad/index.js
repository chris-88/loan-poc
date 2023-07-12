import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";

const ITEM_SIZE = 90;

const DATA = [
  { id: 0, title: "1" },
  { id: 1, title: "2" },
  { id: 2, title: "3" },
  { id: 3, title: "4" },
  { id: 4, title: "5" },
  { id: 5, title: "6" },
  { id: 6, title: "7" },
  { id: 7, title: "8" },
  { id: 8, title: "9" },
  { id: 9, title: "0" },
];

const Button = ({ number }) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: "#efefef",
        borderWidth: 3,
        padding: 15,
        margin: 6,
        justifyContent: "center",
        borderRadius: 100,
        height: ITEM_SIZE,
        width: ITEM_SIZE,
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: 40,
          color: "#000066",
        }}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export default function NumPad() {
  return (
    <FlatList
      data={DATA}
      numColumns={3}
      scrollEnabled={false}
      columnWrapperStyle={{ justifyContent: "center" }}
      renderItem={({ item }) => <Button number={item.title} />}
    />
  );
}
