import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

const DATA = [
  { id: 1, title: "Send money or pay a bill" },
  { id: 2, title: "Transfer between my account" },
  { id: 3, title: "Standing orders" },
  { id: 4, title: "Manage payees" },
  { id: 5, title: "Mobile top up" },
  { id: 6, title: "Direct debits" },
  { id: 7, title: "Future dated payments" },
  { id: 8, title: "Pay to mobile" },
];

const Item = ({ title }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        alignItems: "center",
        padding: 16,
        backgroundColor: "white",
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default function Payments() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}
