import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Header, PageHeading, TextBlock } from "../../../src/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ITEM_SIZE = 105;

const DATA = [
  { id: 1, icon: "car", title: "Buy a car" },
  { id: 2, icon: "hammer", title: "Renovate your home" },
  { id: 3, icon: "school", title: "Pay for education" },
  { id: 4, icon: "island", title: "Go on holiday" },
  { id: 5, icon: "book-alert-outline", title: "Unexpected expenses" },
  { id: 6, icon: "shopping-outline", title: "Lifestyle" },
  { id: 7, icon: "robot-dead-outline", title: "Funeral cost" },
  { id: 8, icon: "medical-bag", title: "Medical" },
  { id: 9, icon: "consolidate", title: "Debt Consolidation" },
  { id: 10, icon: "dots-horizontal-circle-outline", title: "Other" },
];

const Item = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 6,
        padding: 9,
        backgroundColor: "#0000CC",
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={icon} size={40} color="white" />
      <Text
        style={{
          color: "white",
          fontFamily: "OpenSans_400Regular",
          fontSize: 12,
          textAlign: "center",
          paddingTop: 3,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default function Savvy1() {
  const router = useRouter();
  const onPress = () => {
    router.push("/products/savvy_calc/page2");
  };
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
        <PageHeading title={"Let's get started!"} />
        <TextBlock text={"Hey Eoin, what do you need to borrow for?"} />
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item title={item.title} icon={item.icon} onPress={onPress} />
            )}
            numColumns={3}
            style={{ marginVertical: 16 }}
          />
        </View>
      </View>
    </View>
  );
}
