import { View, FlatList } from "react-native";
import ListItem from "../../../../src/components/ListItem";

const DATA = [
  { id: 1, title: "Send money or pay a bill", icon: "send" },
  { id: 2, title: "Transfer between my accounts", icon: "transfer" },
  { id: 3, title: "Standing orders", icon: "bookmark-outline" },
  { id: 4, title: "Direct debits", icon: "format-horizontal-align-right" },
  { id: 5, title: "Future dated payments", icon: "calendar-clock" },
  { id: 6, title: "Manage payees", icon: "account-multiple" },
  { id: 7, title: "Mobile top up", icon: "cellphone-check" },
  { id: 8, title: "Pay to mobile", icon: "cellphone-arrow-down" },
];

export default function Payments() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            icon={item.icon}
            focus={item.id == 1 ? true : false}
          />
        )}
      />
    </View>
  );
}
